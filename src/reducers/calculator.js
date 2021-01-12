export const initialArg = {
  calculatorId: null
}

export const reducer = (state, [type, payload]) => {
  switch (type) {
    case 'INIT': {
      const { calculatorId } = payload
      return {
        calculatorId
      }
    }
    default:
      return state
  }
}
