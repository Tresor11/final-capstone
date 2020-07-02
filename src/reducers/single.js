import {
  ADD_FAVORITE, FETCH_SINGLE_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_SINGLE_PENDING,
} from '../actions/action-type';

const initialState = {
  pending: false,
  details: {
    item: {},
    liked: false,
  },
  error: '',
};

const singleItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        details: {
          ...state.details,
          liked: !state.details.liked,
        },
      };
    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        pending: false,
        details: action.playload,
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

export default singleItemReducer;
