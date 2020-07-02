import { fetchProductsPending, fetchProductsError, BASE_URL } from './index';
import { loadingIcon } from '../helper/index';
import { FETCH_PRODUCTS_PENDING } from './action-type';

function addFavorite(token, id) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending(FETCH_PRODUCTS_PENDING));
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`${BASE_URL}/favorites/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        loadingIcon();
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default addFavorite;
