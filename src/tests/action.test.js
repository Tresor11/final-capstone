import { LOGIN_USER, removeFav } from '../actions/index';

describe('dispatch an action with the user token', () => {
  it('should return the user token', () => {
    expect(LOGIN_USER({ auth_token: '12345' })).toEqual({ type: 'LOGIN', auth_token: '12345' });
  });
});

describe('dispatch an action with the id of the item tobe removed', () => {
  it('should return the item id', () => {
    expect(removeFav(2)).toEqual({ type: 'REMOVE_FAV', id: 2 });
  });
});
