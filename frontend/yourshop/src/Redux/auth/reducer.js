import { all_user_success, login_success, LOGOUT_USER, user_deleted, VALID_USER } from "./authType";

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
          validUser:payload.ValidUserOne,
          isAuthenticated:true
        }
    
        case LOGOUT_USER:{
          return {
              ...state,
              isAuthenticated:false,
              userData:null
          }
      }

    default:
      return state;
  }
};
