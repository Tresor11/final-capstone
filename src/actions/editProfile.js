function editProfile(data, token) {
  return dispatch => {
    const event = JSON.stringify(data);
    console.log(event);
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: event,
    };
    fetch('http://localhost:3000/edit-profile', requestOptions)
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

export default editProfile;
