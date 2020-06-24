import {fetchProductsPending,fetchSingleItem,fetchProductsError} from './index'

function addFavorite(token,id) {
  
  return (dispatch) => {
    dispatch(fetchProductsPending('FETCH_PRODUCTS_PENDING'))
    var requestOptions = {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };
    fetch(`http://localhost:3000/favorites/${id}`,requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res)
      })
      .catch((error) => {
        dispatch(fetchProductsError(error))
      });
  };
}
export default addFavorite;
