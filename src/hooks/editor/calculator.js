import { useCallback } from 'react'

export const useUpdateBasic = calculatorId => {
  const updateBasic = useCallback(data => {
    console.log('update input with', {
      calculatorId, data
    })
  }, [calculatorId])

  return updateBasic
}

export const useUpdateFactor = (calculatorId, factorIndex) => {
  const updateFactor = useCallback(input => {
    console.log('update input with', {
      calculatorId, factorIndex, input
    })
  }, [calculatorId, factorIndex])

  return updateFactor
}

export const useUpdateReference = (calculatorId, referenceIndex) => {
  const updateReference = useCallback(reference => {
    console.log('update reference with', {
      calculatorId, referenceIndex, reference
    })
  }, [calculatorId, referenceIndex])

  return updateReference
}

export const useUpdateEvalution = (calculatorId, evalutionIndex) => {
  const updateEvalution = useCallback(evalution => {
    console.log('update evalution with', {
      calculatorId, evalutionIndex, evalution
    })
  }, [calculatorId, evalutionIndex])

  return updateEvalution
}
