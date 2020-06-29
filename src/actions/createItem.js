/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { fetchProductsPending } from './index';
import { inputValidation, loadingIcon } from '../helper/index';

function createItem(data, token, callBack) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending('CREATE_ITEM_PENDING'));
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
    fetch('https://intense-savannah-62345.herokuapp.com/items', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        loadingIcon('');
        if (res.id === undefined) {
          inputValidation(res);
        } else {
          callBack();
        }
      })
      .catch(error => error);
  };
}

export default createItem;
