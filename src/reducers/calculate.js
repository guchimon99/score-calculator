export const initialArg = {
  values: null
}

export const reducer = (state, [type, payload]) => {
  switch (type) {
    case 'INIT': {
      const { values } = payload
      return {
        values
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
