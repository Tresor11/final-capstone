/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import {
  LOGIN_USER,
  BASE_URL,
} from './index';
import { inputValidation, loadingIcon } from '../helper/index';

function createUser(data) {
  return dispatch => {
    loadingIcon();
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    fetch(`${BASE_URL}/users`,
      {
        method: 'POST',
        body: event,
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        if (res.auth_token !== undefined) {
          dispatch(LOGIN_USER(res));
        } else {
          loadingIcon();
          inputValidation(res);
        }
        return res;
      })
      .catch(error => error);
  };
}

export default createUser;
