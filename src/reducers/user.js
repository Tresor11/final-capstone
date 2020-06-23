import {getToken} from '../actions/index'
const initialState = {
  loged_in: false,
  auth_token: getToken() || '',
  pending: false,
  error: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
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
    case "FETCH_PRODUCTS_PENDING":
      console.log("pending........")
      return {
        ...state,
        pending: true,
      };
    default:
        return state;
  }
}

export default userReducer;
