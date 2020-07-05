import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING } from '../actions/action-type';

const initialState = {
  pending: false,
  products: [],
  error: '',
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.playload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.playload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
