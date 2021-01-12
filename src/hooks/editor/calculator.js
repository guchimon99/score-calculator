import { useCallback } from 'react'

import firebase from '../../firebase'

import { useUid } from '../auth'
import { useCurrentCalculator } from '../calculator'
import { useErrorHandler } from '../error'

const getDoc = (uid, calculatorId) => firebase.firestore().doc(`/users/${uid}/calculators/${calculatorId}`)

export const useUpdate = () => {
  const uid = useUid()
  const { id: calculatorId } = useCurrentCalculator()

  const update = useCallback(async data => {
    const doc = getDoc(uid, calculatorId)
    doc.update(data)
  }, [calculatorId])

  return update
}

export const useAddReference = () => {
  const update = useUpdate()
  const calculator = useCurrentCalculator()

  return useCallback(() => {
    update({
      references: [
        ...calculator.references,
        {
          title: '名称未設定',
          url: ''
        }
      ]
    })
  }, [calculator.references])
}

export const useAddFactor = () => {
  const update = useUpdate()
  const calculator = useCurrentCalculator()

  return useCallback(() => {
    update({
      factors: [
        ...calculator.factors,
        {
          label: '名称未設定',
          note: '',
          options: []
        }
      ]
    })
  }, [calculator.factors])
}

export const useAddOption = factorIndex => {
  const update = useUpdate()
  const calculator = useCurrentCalculator()

  return useCallback(() => {
    const factors = [...calculator.factors]

    factors[factorIndex].options = [
      ...factors[factorIndex].options,
      {
        label: '名称未設定',
        score: 0
      }
    ]

    update({ factors })
  }, [calculator.factors[factorIndex].options])
}

export const useAddEvalution = () => {
  const update = useUpdate()
  const calculator = useCurrentCalculator()

  return useCallback(() => {
    update({
      evalutions: [
        ...calculator.evalutions,
        {
          content: '名称未設定',
          value: 0,
          operator: 'equal'
        }
      ]
    })
  }, [calculator.evalutions])
}

export const useUpdateFactor = (factorIndex) => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const updateFactor = useCallback(factor => {
    const factors = [...calculator.factors]
    factors[factorIndex] = factor
    update({ factors })
  }, [calculator, factorIndex])

  return updateFactor
}

export const useUpdateOption = (factorIndex, optionIndex) => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const updateOption = useCallback(({ label, note, score }) => {
    const factors = [...calculator.factors]
    const options = [...calculator.factors[factorIndex].options]
    options[optionIndex] = {
      label: label || '',
      note: note || '',
      score: parseInt(score) || 0
    }
    factors[factorIndex].options = options
    update({ factors })
  }, [calculator, factorIndex])

  return updateOption
}

export const useUpdateReference = (referenceIndex) => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const updateReference = useCallback(reference => {
    const references = [...calculator.references]
    references[referenceIndex] = reference
    update({ references })
  }, [calculator, referenceIndex])

  return updateReference
}

export const useUpdateEvalution = (evalutionIndex) => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const updateEvalution = useCallback(evalution => {
    const evalutions = [...calculator.evalutions]
    evalutions[evalutionIndex] = evalution
    update({ evalutions })
  }, [calculator, evalutionIndex])

  return updateEvalution
}

export const useDeleteFactor = factorIndex => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const deleteFactor = useCallback(() => {
    const factors = calculator.factors.filter((factor, index) => index !== +factorIndex)
    update({ factors })
  }, [calculator, factorIndex])

  return deleteFactor
}

export const useDeleteReference = referenceIndex => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const deleteReference = useCallback(() => {
    const references = calculator.references.filter((reference, index) => index !== +referenceIndex)
    update({ references })
  }, [calculator, referenceIndex])

  return deleteReference
}

export const useDeleteEvalution = evalutionIndex => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const deleteEvalution = useCallback(() => {
    const evalutions = calculator.evalutions.filter((evalution, index) => index !== +evalutionIndex)
    update({ evalutions })
  }, [calculator, evalutionIndex])

  return deleteEvalution
}

export const useDeleteOption = (factorIndex, optionIndex) => {
  const calculator = useCurrentCalculator()
  const update = useUpdate()

  const deleteOption = useCallback(() => {
    const factors = [...calculator.factors]
    const options = calculator.factors[factorIndex].options.filter((option, index) => index !== +optionIndex)
    factors[factorIndex].options = options
    update({ factors })
  }, [calculator, factorIndex])

  return deleteOption
}

export const useDeleteCalculator = () => {
  const uid = useUid()
  const { id: calculatorId } = useCurrentCalculator()
  const errorHandler = useErrorHandler()

  const deleteCalculator = useCallback(async () => {
    try {
      await getDoc(uid, calculatorId).delete()
    } catch (error) {
      errorHandler(error)
    }
  })

  return deleteCalculator
}
