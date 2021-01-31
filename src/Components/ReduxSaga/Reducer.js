const initialState = {
  signInDetails: {
      isuserLoggedIn:false,
      userDetails:{
          name:undefined,
          password:undefined
      }
  }
};

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
          ...state,
          signInDetails:{
            ...state.signInDetails,
            ...action.payload
          } 
      };
    case "LOGOUT":
        return {
            ...state,
            signInDetails:{
              ...state.signInDetails,
              ...action.payload
            } 
        };
    default:
      return state;
  }
};

export default rootreducer;
