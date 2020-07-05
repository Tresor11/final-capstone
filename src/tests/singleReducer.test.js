import singleReducer from '../reducers/single';

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
    expect(singleReducer(initialState, { type: 'FETCH_SINGLE_SUCCESS', details: { item: 'testing' } })).toEqual({ ...initialState, details: { item: 'testing' } });
  });
  it('should save the erros to the state ', () => {
    expect(singleReducer(initialState, { type: 'FETCH_PRODUCTS_ERROR', error: 'oops!' })).toEqual({ ...initialState, error: 'oops!' });
  });
  it('should add the current item to the favorites ', () => {
    expect(singleReducer(initialState, { type: 'ADD_FAVORITE' })).toEqual({ ...initialState, details: { item: {}, liked: true } });
  });
});
