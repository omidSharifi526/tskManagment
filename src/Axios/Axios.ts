import axios from "axios";
import { baseUrl } from "../env";


const existToken=localStorage.getItem('accessToken');
console.log(existToken)

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    // 'authorization':`Bearer ${existToken}`,
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
