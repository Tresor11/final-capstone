import { LOGIN_USER, removeFav, fetchSingleItem } from '../actions/index';

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

describe('fetch de tails of a single item', () => {
  it('return the detils of the fetched item', () => {
    expect(fetchSingleItem({ name: 'testing' })).toEqual({ type: 'FETCH_SINGLE_SUCCESS', details: { name: 'testing' } });
  });
});
