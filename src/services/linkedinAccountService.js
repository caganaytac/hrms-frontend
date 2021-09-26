import axios from "axios";

export default class LinkedinAccountService {
  controller = `${process.env.REACT_APP_API_URL}/linkedinAccounts`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getById?id=${id}`);
  }
}