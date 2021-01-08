import { createContext, useState, useContext, useCallback } from 'react'

export const Context = createContext()

export const Provider = props => {
  const value = useState(null)

  return <Context.Provider value={value} {...props} />
}

export const useErrorHandler = () => {
  const [, setError] = useContext(Context)

  const errorHandler = useCallback(error => {
    setError(error)
    console.error(error)
  }, [setError])

  return errorHandler
}

export const useError = () => {
  const [error] = useContext(Context)
  return error
}
