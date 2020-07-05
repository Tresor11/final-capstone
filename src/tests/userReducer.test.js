import userReducer from '../reducers/user';

const initialState = {
  loged_in: false,
  auth_token: '',
  details: {
    details: {},
  },
  pending: false,
  error: '',
};

describe('update categpry', () => {
  it('should update the pending status', () => {
    expect(userReducer(initialState, { type: 'LOGIN_USER_PENDING' })).toEqual({ ...initialState, pending: true });
  });
  it('should get logout the user and return the initial state', () => {
    expect(userReducer(initialState, { type: 'LOGOUT' })).toEqual({ ...initialState, details: null, token: null });
  });
});
