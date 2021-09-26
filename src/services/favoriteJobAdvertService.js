import axios from "axios";

export default class FavoriteJobAdvertService {
  controller = `${process.env.REACT_APP_API_URL}/favoriteJobAdverts`;

  getAll() {
    return axios.get(`${this.controller}/getAll`);
  }

  getByIndividual(id) {
    return axios.get("http://localhost:8080/api/faculties/getByIndividual?id=" + id);
  }
}