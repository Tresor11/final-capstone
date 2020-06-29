import itemsReducer from '../reducers/items';

const initialState = {
  pending: false,
  details: {
    item: {},
    liked: '',
  },
  error: '',
};

describe('update categpry', () => {
  it('should update the pending status', () => {
    expect(itemsReducer(initialState, { type: 'FETCH_PRODUCTS_SUCCESS', products: ['a', 'b', 'c'] })).toEqual({ ...initialState, products: ['a', 'b', 'c'] });
  });
  it('should save the erros to the state ', () => {
    expect(itemsReducer(initialState, { type: 'FETCH_PRODUCTS_ERROR', error: 'oops!' })).toEqual({ ...initialState, error: 'oops!' });
  });
});
