export const initialArg = {

}

export const reducer = (state, [type, payload]) => {
  switch (type) {
    case 'SET_USER': {
      const { user } = payload
      return {
        ...state,
        [user.id]: user
      }
    }
    default:
      return state
  }
}
