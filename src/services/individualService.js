import axios from "axios";

export default class IndividualService {
  controller = `${process.env.REACT_APP_API_URL}/individuals`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getById?id=${id}`);
  }
}