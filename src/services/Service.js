import axios from 'axios';
import history from '../history.js'

class Service {

  static handleUnauthorized(){
    history.push('/login');
  }

}

export default Service;