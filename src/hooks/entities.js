import { createContext, useMemo, useReducer, useContext } from 'react'

import { reducer, initializerArg } from '../reducers/entities'

export const Context = createContext()

export const Provider = props => {
  const value = useReducer(reducer, initializerArg)

  return <Context.Provider value={value} {...props} />
}

export const useCalculators = () => {
  const [state] = useContext(Context)

  return useMemo(() => Object.values(state.calculators), [state.calculators])
}

export const useCalculator = id => {
  const [state] = useContext(Context)

  return useMemo(() => state.calculators[+id], [state.calculators, id])
}

export const useReference = (calculatorId, referenceIndex) => {
  const calculator = useCalculator(calculatorId)

  const reference = useMemo(() => calculator.references[referenceIndex], [referenceIndex])

  return reference
}

export const useFactor = (calculatorId, factorIndex) => {
  const calculator = useCalculator(calculatorId)

  const factor = useMemo(() => calculator.factors[factorIndex], [calculator, factorIndex])

  return factor
}

export const useOption = (calculatorId, factorIndex, optionIndex) => {
  const factor = useFactor(calculatorId, factorIndex)

  const option = useMemo(() => factor.options[optionIndex], [optionIndex])

  return option
}

export const useEvalution = (calculatorId, evalutionIndex) => {
  const calculator = useCalculator(calculatorId)

  const evalution = useMemo(() => calculator.evalutions[evalutionIndex], [calculator, evalutionIndex])

  return evalution
}
