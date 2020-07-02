import {
  fetchProductsPending, fetchProductsSuccess, fetchProductsError, BASE_URL,
} from './index';

import { FETCH_PRODUCTS_PENDING } from './action-type';

function fetchItems(token) {
  return dispatch => {
    dispatch(fetchProductsPending(FETCH_PRODUCTS_PENDING));
    fetch(`${BASE_URL}/items`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default fetchItems;
