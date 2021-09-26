import axios from "axios";

export default class TechnologyService {
  controller = `${process.env.REACT_APP_API_URL}/technologies`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getById?id=${id}`);
  }
}