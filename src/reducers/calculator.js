export const initializerArg = {
  calculator: null,
  values: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CALCULATOR': {
      const { calculator } = action.payload
      const values = calculator.factors.map(() => null)
      return {
        ...state,
        calculator,
        values
      }
    }
    case 'SET_VALUE': {
      const { factorIndex, optionIndex } = action.payload
      const values = [...state.values]
      values[factorIndex] = optionIndex
      return {
        ...state,
        values
      }
    }
    case 'RESET_VALUES': {
      const { calculator } = state
      return {
        ...state,
        values: calculator.factors.map(() => null)
      }
    }
    default:
      return state
  }
}
