import axios from "axios";
import { baseUrl } from "../env";


const existToken=localStorage.getItem('accessToken');
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin":'*'
  },
});
axiosInstance.interceptors.request.use(
  config => {
    const existToken = localStorage.getItem('accessToken');
    if (existToken) {
      config.headers.Authorization = `Bearer ${existToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance
