import { login_success } from "./authType";

const initState = {
  token: ""
};
export const authReducer = (state = initState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case login_success:{
      return {
        ...state,
        token: payload.token
      };
    }
    
    default:
      return state;
  }
};
