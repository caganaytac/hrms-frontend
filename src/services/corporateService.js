import axios from "axios";

export default class CorporateService {
  controller = `${process.env.REACT_APP_API_URL}/corporates`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getById?id=${id}`);
  }
}