import { all_user_success, login_success, user_deleted, VALID_USER } from "./authType";

const initState = {
  token: "",
  userData: {},
  allUser:[],
  validUser:{},
  isAuthenticated:false
};
export const authReducer = (state = initState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case login_success: {
      return {
        ...state,
        token: payload.token,
        userData: payload.userData,
        isAuthenticated:true
      };
    }

    case all_user_success:
      return {
          ...state,
          allUser:payload.data
      }

      case VALID_USER:
        return {
          ...state,
          validUser:payload.ValidUserOne
        }

    default:
      return state;
  }
};
