export const initialArg = {
  calculatorId: null,
  values: null
}

export const reducer = (state, [type, payload]) => {
  switch (type) {
    case 'INIT': {
      const { calculatorId, values } = payload
      return {
        calculatorId, values
      }
    }
    case 'SET_VALUE': {
      const { factorIndex, optionIndex } = payload
      const values = [...state.values]
      values[factorIndex] = optionIndex
      return {
        ...state,
        values
      }
    }
    case 'RESET': {
      const { values } = payload
      return {
        ...state,
        values
      }
    }
    default:
      return state
  }
}
