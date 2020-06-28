const initialState = {
  pending: false,
  details: {
    item: {},
    liked: '',
  },
  error: '',
};

const singleItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        details: {
          ...state.details,
          liked: !state.details.liked,
        },
      };
    case 'FETCH_SINGLE_SUCCESS':
      return {
        ...state,
        pending: false,
        details: action.details,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default singleItemReducer;
