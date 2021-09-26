import axios from "axios";

export default class SchoolFacultyService {
  controller = `${process.env.REACT_APP_API_URL}/schoolFaculties`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getById(id) {
    return axios.get(`${this.controller}/getById?id=${id}`);
  }
}