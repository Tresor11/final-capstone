import {fetchProductsPending,fetchProductsError,FetchUserDetails} from './index'

function fetchUser(token) {
  return (dispatch) => {
    dispatch(fetchProductsPending('FETCH_USER_PENDING'))
    fetch(`http://localhost:3000/profile`,{headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }})
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res)
        dispatch(FetchUserDetails(res))
      })
      .catch((error) => {
        dispatch(fetchProductsError(error))
      });
  };
}
export default fetchUser;
