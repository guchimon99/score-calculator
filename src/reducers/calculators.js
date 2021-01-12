export const initialArg = {

}

export const reducer = (state, [type, payload]) => {
  switch (type) {
    case 'SET_CALCULATOR': {
      const { calculator } = payload
      return {
        ...state,
        [calculator.id]: calculator
      }
    }
    case 'UNSET_CALCULATOR': {
      const newState = { ...state }
      const { calculatorId } = payload
      delete newState[calculatorId]
      return newState
    }
    default:
      return state
  }
}
