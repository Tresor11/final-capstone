import {getToken,saveToken} from '../actions/index'
const initialState = {
  loged_in: false,
  auth_token: getToken() || '',
  details:{},
  pending: false,
  error: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      saveToken(action.auth_token)
      return {
        ...state,
        loged_in: true,
        auth_token: getToken(),
        pending: false,
      };
    case "LOGOUT":
      return {
        ...state,
        loged_in: false,
        token: "",
      };
    case 'FETCH_USER_DETAILS':
      return {
        ...state,
        details:action.details
      }
    case "LOGIN_USER_PENDING":
      return {
        ...state,
        pending: true,
      };
    default:
        return state;
  }
}

export default userReducer;
