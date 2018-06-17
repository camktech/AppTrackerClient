import Service from './Service.js'
import axios from 'axios';

class SessionsService extends Service {
  static login(){
    axios.post('http://localhost:3000/login', {user: {email: 'cam@cam.com', password: '123123123'}})
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err)
    });
  }
}

export default SessionsService;