import { fetchProductsPending, BASE_URL } from './index';
import { inputValidation, loadingIcon } from '../helper/index';
import { LOGIN_USER_PENDING } from './action-type';

function editProfile(data, token, callBack) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending(LOGIN_USER_PENDING));
    const event = JSON.stringify(data);
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: event,
    };
    fetch(`${BASE_URL}/edit-profile`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id !== undefined) {
          callBack();
        } else {
          loadingIcon();
          inputValidation(res);
        }
        return res;
      })
      .catch(error => error);
  };
}

export default editProfile;
