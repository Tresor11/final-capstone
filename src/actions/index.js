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
  
  const fetchSingleMeal = details => ({
    type: 'FETCH_MEAL_SUCCESS',
    details,
  });

  const LOGIN_USER=({auth_token})=>({
    type: 'LOGIN',
    auth_token
  }
  )
  export {
    fetchProductsError,
    fetchProductsPending,
    fetchProductsSuccess,
    UPDATE_CATEGORY,
    fetchSingleMeal,
    saveToken,
    LOGIN_USER,
    getToken
  };
  