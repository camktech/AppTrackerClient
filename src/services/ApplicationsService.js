import Service from './Service'
import axios from 'axios';

class ApplicationsService extends Service {
  static getAll(){
    return axios.get('http://localhost:3000/applications');
  }

  static search(query){
    return axios.get('http://localhost:3000/applications/search?query=' + query); 
  }


}

export default ApplicationsService;