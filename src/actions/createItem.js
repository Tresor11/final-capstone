/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function createItem(data, token) {
  return dispatch => {
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: event,
    };
    fetch('http://localhost:3000/items', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
      })
      .catch(error => error);
  };
}

export default createItem;
