import {
  LOGIN_USER,
} from './index';

function createUser(data) {
  return dispatch => {
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    fetch('http://localhost:3000/users',
      {
        method: 'POST',
        body: event,
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(LOGIN_USER(res));
      })
      .catch(error => error);
  };
}

export default createUser;
