// import {
//     CREATE_BOOK,
//   } from './index';
  
  function createUser(data) {
    return dispatch => {
        var event = new FormData();
        for(var name in data){
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
          console.log(res)
        })
        .catch(error => error);
    };
  }
  
  
  export default createUser;
  