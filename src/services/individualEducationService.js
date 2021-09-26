import axios from "axios";

export default class IndividualEducationService {
  controller = `${process.env.REACT_APP_API_URL}/individualEducations`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getById?id=${id}`);
  }
}