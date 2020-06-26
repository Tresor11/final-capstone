import {fetchProductsPending,fetchSingleItem,fetchProductsError} from './index'

function fetchSingle(token,id,method) {
  return (dispatch) => {
    dispatch(fetchProductsPending('FETCH_PRODUCTS_PENDING'))
    var requestOptions = {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json"
      },
    };

    fetch(`http://localhost:3000/items/${id}`,requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchSingleItem(res))
      })
      .catch((error) => {
        dispatch(fetchProductsError(error))
      });
  };
}
export default fetchSingle;
