import {
  fetchProductsPending, fetchProductsError, AddFavorite, BASE_URL,
} from './index';

import { FETCH_SINGLE_PENDING } from './action-type';
import { loadingIcon } from '../helper/index';

function addFavorite(token, id, method) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending(FETCH_SINGLE_PENDING));
    const raw = JSON.stringify({ item_id: `${id}` });
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: raw,
    };
    fetch(`${BASE_URL}/favorites`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        loadingIcon();
        dispatch(AddFavorite());
      })
      .catch(error => {
        dispatch(AddFavorite());
        dispatch(fetchProductsError(error));
      });
  };
}
export default addFavorite;
