import { useMemo, createContext, useContext, useReducer, useEffect } from 'react'

import { reducer, initialArg } from '../reducers/calculator'

import { useCalculator } from './calculators'

export const Context = createContext()

export const Provider = ({ calculatorId, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialArg)
  const calculator = useCalculator(calculatorId)

  useEffect(() => {
    dispatch(['INIT', { calculatorId }])
  }, [calculatorId])

  if (!state.calculatorId || !calculator) return null

  return <Context.Provider value={[state, dispatch]} {...props} />
}

export const useCurrentCalculator = () => {
  const [{ calculatorId }] = useContext(Context)
  const calculator = useCalculator(calculatorId)

  return calculator
}

export const useFactor = factorIndex => {
  const { factors } = useCurrentCalculator()
  return useMemo(() => factors[factorIndex], [factors, factorIndex])
}

export const useOption = (factorIndex, optionIndex) => {
  const { options } = useFactor(factorIndex)
  return useMemo(() => options[optionIndex], [options, optionIndex])
}

export const useEvalution = evalutionIndex => {
  const { evalutions } = useCurrentCalculator()
  return useMemo(() => evalutions[evalutionIndex], [evalutions, evalutionIndex])
}

export const useReference = referenceIndex => {
  const { references } = useCurrentCalculator()
  return useMemo(() => references[referenceIndex], [references, referenceIndex])
}
