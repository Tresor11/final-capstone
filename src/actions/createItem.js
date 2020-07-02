/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { fetchProductsPending, BASE_URL } from './index';
import { inputValidation, loadingIcon } from '../helper/index';
import { CREATE_ITEM_PENDING } from './action-type';

function createItem(data, token, callBack) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending(CREATE_ITEM_PENDING));
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: event,
    };
    fetch(`${BASE_URL}/items`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id === undefined) {
          inputValidation(res);
          loadingIcon();
        } else {
          callBack();
        }
      })
      .catch(error => error);
  };
}

export default createItem;
