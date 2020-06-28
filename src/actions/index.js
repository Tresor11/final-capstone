/* eslint-disable camelcase */
const fetchProductsPending = type => ({
  type,
});

const saveToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

const saveDetails = details => {
  localStorage.setItem('details', JSON.stringify(details));
};

const getDetails = () => {
  const res = localStorage.getItem('details');
  return JSON.parse(res);
};

const getToken = () => {
  const res = localStorage.getItem('token');
  return JSON.parse(res);
};

const removeFav = id => ({
  type: 'REMOVE_FAV',
  id,
});

const fetchProductsSuccess = products => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products,
});

const fetchProductsError = error => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});

const fetchSingleItem = details => ({
  type: 'FETCH_SINGLE_SUCCESS',
  details,
});

const LOGIN_USER = ({ auth_token }) => ({
  type: 'LOGIN',
  auth_token,
});

const LOGOUT_USER = () => ({
  type: 'LOGOUT',
});

const FetchUserDetails = details => ({
  type: 'FETCH_USER_DETAILS',
  details,
});

const AddFavorite = () => ({ type: 'ADD_FAVORITE' });

export {
  fetchProductsError,
  fetchProductsPending,
  FetchUserDetails,
  fetchProductsSuccess,
  fetchSingleItem,
  saveToken,
  LOGIN_USER,
  saveDetails,
  getDetails,
  removeFav,
  AddFavorite,
  getToken,
  LOGOUT_USER,
};
