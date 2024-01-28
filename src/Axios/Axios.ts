import axios from "axios";
import { baseUrl } from "../env";
//   "phoneNumber": "09911461820",
// 09121223615

const existToken=localStorage.getItem('accessToken');


const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'authorization':`Bearer ${existToken}`,
    "Access-Control-Allow-Origin":'*'
  },
});

export default axiosInstance
