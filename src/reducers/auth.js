export const initialArg = {
  isReady: false,
  currentUser: null
}

export const reducer = (state, [type, payload]) => {
  switch (type) {
    case 'SET_CURRENT_USER': {
      const { currentUser } = payload
      return {
        isReady: true,
        currentUser
      }
    }
    default:
      return state
  }
}
