const authReducer = (state, action) => {
    switch (action.type) {
      case "AUTH_SUCCESS":
        return {
          ...state,
          isAuth: action.payload.encodedToken ? true : false,
          user: action.payload.user,
          encodedToken: action.payload.encodedToken,
        };
      default:
        return state;
    }
  };

  export { authReducer };