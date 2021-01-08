import { useMemo, useReducer, createContext, useEffect, useContext, useCallback } from 'react'

import { reducer, initializerArg } from '../reducers/calculator'

export const Context = createContext()

export const Provider = ({ calculator, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initializerArg)

  useEffect(() => {
    dispatch({ type: 'SET_CALCULATOR', payload: { calculator } })
  }, [calculator])

  return <Context.Provider value={[state, dispatch]} {...props} />
}

export const useCalculator = () => {
  const [{ calculator }] = useContext(Context)
  return useMemo(() => calculator, [calculator])
}

export const useTitle = () => {
  const calculator = useCalculator()
  return useMemo(() => calculator && calculator.title, [calculator])
}

export const useEvalutionTitle = () => {
  const calculator = useCalculator()
  return useMemo(() => calculator && calculator.evalutionTitle, [calculator])
}

export const useCalculatorId = () => {
  const calculator = useCalculator()
  return useMemo(() => calculator && calculator.id, [calculator])
}

export const useFactors = () => {
  const calculator = useCalculator()

  return useMemo(() => calculator ? calculator.factors : [], [calculator])
}

export const useEvalutions = () => {
  const calculator = useCalculator()
  return useMemo(() => calculator ? calculator.evalutions : [], [calculator])
}

export const useReferences = () => {
  const calculator = useCalculator()
  return useMemo(() => calculator ? calculator.references : [], [calculator])
}

export const useEvolutions = () => {
  const calculator = useCalculator()
  return useMemo(() => calculator && calculator.evolutions, [calculator])
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
    dispatch({
      type: 'SET_VALUE',
      payload: {
        factorIndex, optionIndex
      }
    })
  }, [])
  return setValue
}

export const useValues = () => {
  const [{ values }] = useContext(Context)
  return values
}

export const useProgress = () => {
  const values = useValues()
  return useMemo(() => values.filter(v => v !== null).length / values.length, [values])
}

export const useScore = () => {
  const factors = useFactors()
  const values = useValues()
  const score = useMemo(() => factors.reduce((score, factor, index) => {
    const option = factor.options[values[index]]
    return option ? option.score + score : score
  }, 0), [factors, values])

  return score
}

export const useEvalutionIndex = () => {
  const values = useValues()
  const evalutions = useEvalutions()
  const score = useScore()

  return useMemo(() => {
    if (values.some(value => value === null)) return -1

    return evalutions.findIndex(({ operator, value }) => {
      switch (operator) {
        case 'less':
          return score < value
        case 'less than or equal':
          return score <= value
        case 'equal':
          return score === value
        case 'greater than or equal':
          return score >= value
        case 'greater':
          return score > value
        default:
          return false
      }
    })
  }, [values, score, evalutions])
}

export const useResetValues = () => {
  const [, dispatch] = useContext(Context)
  const resetValues = useCallback(() => {
    dispatch({ type: 'RESET_VALUES' })
  }, [])
  return resetValues
}
