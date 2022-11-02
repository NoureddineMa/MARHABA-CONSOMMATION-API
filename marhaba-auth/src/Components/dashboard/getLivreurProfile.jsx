import axios from 'axios';
import { useState } from 'react';


function GetClient() {

  const [message,setMessage] = useState("")
  const [error, setError] = useState(false)

  const getLivreurHandler = () => {
    const token = localStorage.getItem("token")
    // console.log(token);
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      },
      withCredentials: true
    }
    const API_URL = "http://localhost:7000/api/user/livreur/me/"
    axios.get(API_URL, config).then((response) => {
      console.log(response.data.message)
      setMessage(response.data.message)
      setError(false)
    }).catch((err) => {
      console.log(err.response.data.message)
      setMessage(err.response.data.message)
      setError(true)
      
    })
  }
  getLivreurHandler()
  return (
    <div>{message}</div>
  )
}

// export default api;
export default GetClient

