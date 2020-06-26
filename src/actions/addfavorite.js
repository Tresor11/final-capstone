import { fetchProductsPending, fetchSingleItem, fetchProductsError } from './index';

function addFavorite(token, id) {
  return dispatch => {
    dispatch(fetchProductsPending('FETCH_PRODUCTS_PENDING'));
    const raw = JSON.stringify({ item_id: `${id}` });
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: raw,
    };
    fetch('http://localhost:3000/favorites', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default addFavorite;
