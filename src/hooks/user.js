import { createContext, useEffect, useReducer } from 'react'

import firebase from '../firebase'

import { reducer, initialArg } from '../reducers/user'

import { useUid } from './auth'

const Context = createContext()

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialArg)

  const uid = useUid()

  useEffect(() => {
    if (!uid) return null

    const unsubscribe = firebase.firestore().doc(`/users/${uid}`).onSnapshot(doc => {
      const user = {
        id: doc.id,
        ...doc.data()
      }
      dispatch(['SET_USER', { user }])
    })

    return unsubscribe
  }, [uid])

  return <Context.Provider value={[state, dispatch]} {...props} />
}
