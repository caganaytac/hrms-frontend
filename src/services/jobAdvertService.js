import axios from "axios";

export default class JobAdvertService {
  controller = `${process.env.REACT_APP_API_URL}/jobAdverts`;

  getAll() {
    return axios.get(`${this.controller}/getDetailsAsPageable`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getDetailById?id=${id}`);
  }
  
  getByCorporate(id) {
    return axios.get(`${this.controller}/getDetailsByCorporateAsPageable?id=${id}`);
  }
 
  add(values) {
    return axios.post(`${this.controller}/add`, values);
  }
}