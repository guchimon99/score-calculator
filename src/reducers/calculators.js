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
    default:
      return state
  }
}
