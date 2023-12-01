import axios from "axios";


const userBody={
    "phoneNumber": "09911461820",
    "password":"123456"
  }
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Transfer-Encoding":"chunked"
    }
  };

const login=async()=>{
    const login_URL='https://37.32.10.227:475/api/Account/Login'
    return await axios.post(login_URL,userBody)
}

export{
    login
}