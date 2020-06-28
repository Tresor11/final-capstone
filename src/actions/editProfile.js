import { fetchProductsPending } from './index';
import { inputValidation } from '../helper/index';

function editProfile(data, token, callBack) {
  return dispatch => {
    dispatch(fetchProductsPending('EDIT_PROFILE_PENDING'));
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
          inputValidation(res);
        }
        return res;
      })
      .catch(error => error);
  };
}

export default editProfile;
