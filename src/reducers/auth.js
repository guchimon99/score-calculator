export const initializerArg = {
  isReady: false,
  currentUser: null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER': {
      const { currentUser } = action.payload
      return {
        ...state,
        isReady: true,
        currentUser
      }
    }
    default:
      return state
  }
}
