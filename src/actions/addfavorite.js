import { fetchProductsPending, fetchProductsError, AddFavorite } from './index';

function addFavorite(token, id, method) {
  return dispatch => {
    dispatch(fetchProductsPending('FETCH_PRODUCTS_PENDING'));
    const raw = JSON.stringify({ item_id: `${id}` });
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: raw,
    };
    fetch('https://intense-savannah-62345.herokuapp.com/favorites', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(AddFavorite());
      })
      .catch(error => {
        dispatch(AddFavorite());
        dispatch(fetchProductsError(error));
      });
  };
}
export default addFavorite;
