import axios from "axios";

export default class LanguageService {
  controller = `${process.env.REACT_APP_API_URL}/languages`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getById?id=${id}`);
  }
}