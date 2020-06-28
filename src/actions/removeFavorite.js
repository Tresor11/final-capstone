import { fetchProductsPending, fetchProductsError } from './index';

function addFavorite(token, id) {
  return dispatch => {
    dispatch(fetchProductsPending('FETCH_PRODUCTS_PENDING'));
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`https://intense-savannah-62345.herokuapp.com/favorites/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default addFavorite;
