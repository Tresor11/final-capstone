const fetchProductsPending = (type) => ({
    type: type,
  });

const saveToken=(token)=>{
  console.log(`${token} being saved to the local storage`)
    localStorage.setItem('token',JSON.stringify(token))
}

const getToken=()=>{
  const res=localStorage.getItem('token')
  console.log('gotten it from the storage')
  return JSON.parse(res);
}
  
  const fetchProductsSuccess = products => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    products,
  });
  
  const fetchProductsError = error => ({
    type: 'FETCH_PRODUCTS_ERROR',
    error,
  });
  const UPDATE_CATEGORY = category => ({
    type: 'UPDATE_CATEGORY',
    category,
  });
  
  const fetchSingleItem = details => ({
    type: 'FETCH_SINGLE_SUCCESS',
    details,
  });

  const LOGIN_USER=({auth_token})=>({
    type: 'LOGIN',
    auth_token
  })

  const FetchUserDetails=(details)=>({
    type:'FETCH_USER_DETAILS',
    details
  })

  export {
    fetchProductsError,
    fetchProductsPending,
    FetchUserDetails,
    fetchProductsSuccess,
    UPDATE_CATEGORY,
    fetchSingleItem,
    saveToken,
    LOGIN_USER,
    getToken
  };
  