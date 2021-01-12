import { useMemo, createContext, useEffect, useContext, useCallback, useReducer } from 'react'

import { getScore, getEvalutionIndex, getEmptyValues } from '../services/calcurator'

import { reducer, initialArg } from '../reducers/calculate'

import { useCurrentCalculator } from './calculator'

export const Context = createContext()

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialArg)
  const calculator = useCurrentCalculator()

  useEffect(() => {
    if (!calculator) return null
    dispatch(['INIT', {
      values: getEmptyValues(calculator)
    }])
  }, [calculator])

  if (!state.values) return null

  return <Context.Provider value={[state, dispatch]} {...props} />
}

export const useValues = () => {
  const [{ values }] = useContext(Context)
  return useMemo(() => values, [values])
}

export const useValue = factorIndex => {
  const values = useValues()
  return useMemo(() => values[factorIndex], [values, factorIndex])
}

export const useIsFixedFactor = factorIndex => {
  const value = useValue(factorIndex)
  return useMemo(() => value !== null, [value])
}

export const useIsSelectedOption = (factorIndex, optionIndex) => {
  const value = useValue(factorIndex)

  return useMemo(() => value === optionIndex, [value, optionIndex])
}

export const useSetValue = factorIndex => {
  const [, dispatch] = useContext(Context)
  const setValue = useCallback(optionIndex => {
    dispatch(['SET_VALUE', { factorIndex, optionIndex }])
  }, [factorIndex])
  return setValue
}

export const useProgress = () => {
  const values = useValues()
  return useMemo(() => values.filter(v => v !== null).length / values.length, [values])
}

export const useScore = () => {
  const calculator = useCurrentCalculator()
  const values = useValues()

  return useMemo(() => getScore(calculator, values), [calculator, values])
}

export const useEvalutionIndex = () => {
  const calculator = useCurrentCalculator()
  const values = useValues()

  return useMemo(() => getEvalutionIndex(calculator, values), [calculator, values])
}

export const useResetValues = () => {
  const [, dispatch] = useContext(Context)
  const values = useValues()

  return useCallback(() => {
    dispatch(['RESET', { values: values.map(() => null) }])
  }, [values])
}
