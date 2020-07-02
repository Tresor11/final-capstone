import {
  fetchProductsError,
  fetchProductsPending,
  LOGIN_USER,
  BASE_URL,
} from './index';

import { loadingIcon } from '../helper/index';

import { LOGIN_USER_PENDING } from './action-type';

function loginUser(data) {
  return dispatch => {
    dispatch(fetchProductsPending(LOGIN_USER_PENDING));
    loadingIcon();
    fetch(`${BASE_URL}/auth/login`,
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
        loadingIcon();
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
