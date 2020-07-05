import {
  fetchProductsPending, fetchSingleItem, fetchProductsError, BASE_URL,
} from './index';
import { FETCH_SINGLE_PENDING } from './action-type';

function fetchSingle(token, id, method) {
  return dispatch => {
    dispatch(fetchProductsPending(FETCH_SINGLE_PENDING));
    const requestOptions = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    fetch(`${BASE_URL}/items/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchSingleItem(res));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default fetchSingle;
