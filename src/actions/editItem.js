function editItem(data, token,id) {
  return (dispatch) => {
    var event = JSON.stringify(data)
    var requestOptions = {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json"
      },
      body: event,
    };
    fetch(`http://localhost:3000/items/${id}`, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
      })
      .catch((error) => error);
  };
}

export default editItem;
