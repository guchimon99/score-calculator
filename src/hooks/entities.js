import { createContext, useMemo, useReducer, useContext } from 'react'

import { reducer, initializerArg } from '../reducers/entities'

export const EntitiesContext = createContext()

export const EntitiesProvicer = props => {
  const value = useReducer(reducer, initializerArg)

  return <EntitiesContext.Provider value={value} {...props} />
}

export const useCalculators = () => {
  const [state] = useContext(EntitiesContext)

  return useMemo(() => Object.values(state.calculators), [state.calculators])
}

export const useCalculator = id => {
  const [state] = useContext(EntitiesContext)

  return useMemo(() => state.calculators[+id], [state.calculators, id])
}
