import {
  fetchProductsError,
  fetchProductsPending,
  LOGIN_USER,
} from './index';

function loginUser(data) {
  return dispatch => {
    dispatch(fetchProductsPending('LOGIN_USER_PENDING'));
    fetch('https://intense-savannah-62345.herokuapp.com/auth/login',
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
        if (res.auth_token !== undefined) {
          dispatch(LOGIN_USER(res));
        }
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default loginUser;
