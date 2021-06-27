import axios from "axios";

const BaseUrl = "http://localhost:8000/api/frontend";
class HelperClass {
  // delete
  // post
  // get
  // putt
  postRequest(url, data = null) {
    // return axios.post(`${store.state.BaseUrl}${url}`,data,{
    return axios.post(`${BaseUrl}${url}`, data, {});
  }
  getRequest(url) {
    // return axios.get(`${store.state.BaseUrl}${url}`,{
    return axios.get(`${BaseUrl}${url}`, {});
  }
}

export default new HelperClass();
