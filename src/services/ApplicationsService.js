import Service from './Service'
import axios from 'axios';

class ApplicationsService extends Service {
  static getAll(){
    return axios.get('http://localhost:3000/applications');
  }


}

export default ApplicationsService;