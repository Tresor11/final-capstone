function fetchItems() {
  return (dispatch) => {
    fetch("http")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export default fetchItems;
