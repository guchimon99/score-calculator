import { calculators } from '../data'

export const initializerArg = {
  calculators
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CALCULATOR': {
      const { calculator } = action.payload
      return {
        ...state,
        calculators: {
          ...state.calculators,
          [calculator.id]: calculator
        }
      }
    }
    default:
      return state
  }
}
