import {
  fetchProductsError,
  fetchProductsPending,
  LOGIN_USER,
  saveToken,
} from './index'
  
function loginUser(data) {
    return dispatch => {
      dispatch(fetchProductsPending());
      fetch('http://localhost:3000/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw (res.error);
          }
          saveToken(res.auth_token)
          dispatch(LOGIN_USER(res))
          return res
        })
        .catch(error => {
          dispatch(fetchProductsError(error))
        });
    };
  }
  
  
  export default loginUser;
  