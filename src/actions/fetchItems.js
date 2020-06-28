import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './index';

function fetchItems(token) {
  return dispatch => {
    dispatch(fetchProductsPending('FETCH_PRODUCTS_PENDING'));
    fetch('https://intense-savannah-62345.herokuapp.com/items', {
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
