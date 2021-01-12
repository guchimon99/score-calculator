import { useMemo, createContext, useReducer, useEffect, useContext, useCallback } from 'react'

import { calculators } from '../data'

import { reducer, initialArg } from '../reducers/auth'

import firebase from '../firebase'

const Context = createContext()

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialArg)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async currentUser => {
      dispatch(['SET_CURRENT_USER', { currentUser }])

      if (!currentUser) {
        const credential = await firebase.auth().signInAnonymously()
        const uid = credential.user.uid
        await firebase.firestore().doc(`/users/${uid}`).set({
          displayName: uid,
          createdAt: new Date()
        })

        for (const calculator of calculators) {
          await firebase.firestore().collection(`/users/${uid}/calculators`).add(calculator)
        }
      }
    })

    return unsubscribe
  }, [])

  if (!state.currentUser) return null

  return <Context.Provider value={state} {...props} />
}

export const useIsReady = () => {
  const { isReady } = useContext(Context)

  return useMemo(() => isReady, [isReady])
}

export const useCurrentUser = () => {
  const { currentUser } = useContext(Context)

  return useMemo(() => currentUser, [currentUser])
}

export const useUid = () => {
  const currentUser = useCurrentUser()

  return useMemo(() => currentUser && currentUser.uid, [currentUser])
}

const signOutMessage = 'サインアウトすると作成した計算機を永久に失いますがよろしいですか？'

export const useSignOut = () => {
  const signOut = useCallback(() => {
    if (!window.confirm(signOutMessage)) return

    firebase.auth().signOut()
  }, [])

  return signOut
}
