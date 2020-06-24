import {fetchProductsPending,fetchSingleItem,fetchProductsError} from './index'

function fetchSingle(token,id) {
  console.log(token)
  return (dispatch) => {
    dispatch(fetchProductsPending('FETCH_PRODUCTS_PENDING'))
    fetch(`http://localhost:3000/items/${id}`,{headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }})
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
