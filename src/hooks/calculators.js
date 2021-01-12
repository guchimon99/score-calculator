import {
  createContext,
  useMemo,
  useReducer,
  useEffect,
  useContext,
  useCallback
} from 'react'
import { useHistory } from 'react-router-dom'

import { createEmptyCalculator } from '../services/calcurator'

import firebase from '../firebase'

import { reducer, initialArg } from '../reducers/calculators'

import { useUid } from './auth'

import { useErrorHandler } from './error'

const calculatorsPath = uid => `/users/${uid}/calculators`

export const Context = createContext()

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initialArg)

  const uid = useUid()
  const errorHandler = useErrorHandler()

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection(calculatorsPath(uid)).onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        const calculator = {
          id: doc.id,
          ...doc.data()
        }
        dispatch(['SET_CALCULATOR', { calculator }])
      })
    }, errorHandler)

    return unsubscribe
  }, [uid])

  return <Context.Provider value={state} {...props} />
}

export const useCalculator = (calculatorId) => {
  const state = useContext(Context)

  return useMemo(() => {
    return state[calculatorId] || null
  }, [state, calculatorId])
}

export const useReference = (calculatorId, referenceIndex) => {
  const calculator = useCalculator(calculatorId)

  return useMemo(() => calculator.references[referenceIndex], [calculator, referenceIndex])
}

export const useFactor = (calculatorId, factorIndex) => {
  const calculator = useCalculator(calculatorId)

  return useMemo(() => calculator.factors[factorIndex], [calculator, factorIndex])
}

export const useOption = (calculatorId, factorIndex, optionIndex) => {
  const factor = useFactor(calculatorId, factorIndex)

  return useMemo(() => factor.options[optionIndex], [factor, optionIndex])
}

export const useEvalution = (calculatorId, evalutionIndex) => {
  const calculator = useCalculator(calculatorId)

  return useMemo(() => calculator.evalutions[evalutionIndex], [calculator, evalutionIndex])
}

export const useAllCalculators = () => {
  const state = useContext(Context)

  return useMemo(() => {
    return Object.values(state)
  }, [state])
}

export const useCreateCalculator = () => {
  const uid = useUid()
  const history = useHistory()

  const createCalculator = useCallback(async () => {
    const calculator = createEmptyCalculator()
    const ref = await firebase.firestore().collection(calculatorsPath(uid)).add(calculator)
    history.replace(`/calculators/${ref.id}`)
  }, [history])

  return createCalculator
}
