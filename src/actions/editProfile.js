import { fetchProductsPending } from './index';
import { inputValidation, loadingIcon } from '../helper/index';

function editProfile(data, token, callBack) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending('FETCH_USER_PENDING'));
    const event = JSON.stringify(data);
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: event,
    };
    fetch('https://intense-savannah-62345.herokuapp.com/edit-profile', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id !== undefined) {
          callBack();
        } else {
          loadingIcon('button');
          inputValidation(res);
        }
        return res;
      })
      .catch(error => error);
  };
}

export default editProfile;
