import { createContext, useReducer, useEffect, useContext } from 'react'

import firebase from '../firebase'

import { reducer, initializerArg } from '../reducers/auth'

export const Context = createContext()

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initializerArg)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async currentUser => {
      if (!currentUser) {
        firebase.auth().signInAnonymously()
        return
      }

      dispatch({ type: 'SET_CURRENT_USER', payload: { currentUser } })
    })
  }, [])

  return <Context.Provider value={[state, dispatch]} {...props} />
}

export const useIsReady = () => {
  const [{ isReady }] = useContext(Context)
  return isReady
}

export const useCurrentUser = () => {
  const [{ currentUser }] = useContext(Context)
  return currentUser
}
