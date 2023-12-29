import axios from "axios";


// const userBody = {
//   "phoneNumber": "09911461820",
//   "password": "123456",
//   "smsCode": "",
//   "isOTP": false
// }



// {
//   "phoneNumber": "09911461820",
//   "password":"123456"
// }
const existToken=localStorage.getItem('accessToken');
const baseURL='https://api.myokr.ir/api/';
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'authorization':`Bearer ${existToken}`,
    "Access-Control-Allow-Origin":'*'
  },
});




const login = async (userBody:any) => {
  console.log(userBody,'kghgh')
  return await axiosInstance.post('Account/Login',userBody)
}


const getPriodById=async({queryKey:info}:any)=>{
  let tId=info[1];

return await axiosInstance.get(`OKR/GetAllPeriodsByTenantId/?tenantId=${tId}`)
}


export {
  login,
  getPriodById
}