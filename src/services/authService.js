import axios from "axios";

export default class AuthService {
  controller = `${process.env.REACT_APP_API_URL}/auth`;

  registerForIndividual(values) {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("nationalIdentity", values.nationalIdentity);
    formData.append("dateOfBirth", values.dateOfBirth);
    formData.append("photo", values.photo);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(`${this.controller}/registerForIndividual`, formData, config);
  }

  registerForCorporate(values) {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("companyName", values.companyName);
    formData.append("website", values.website);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("photo", values.photo);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(
      `${this.controller}/registerForCorporate`,
      formData,
      config
    );
  }
}
