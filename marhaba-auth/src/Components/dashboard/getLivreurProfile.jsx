import axios from 'axios';
import { useState } from 'react';


function GetClient() {

  const [message,setMessage] = useState("")
  const [succes, setSucces] = useState(false)
  

  const getLivreurHandler = () => {
    const token = localStorage.getItem("token")
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
      setSucces(true)})
      .catch((err) => {
        console.log(err.response.data.message);
        setMessage(err.response.data.message)
        setSucces(false)
    })
  }
  getLivreurHandler()
  return (
    <div className=''>
    <p> { succes && message }</p>
    <p> {!succes && message}</p>
    </div>
    )
}

// export default api;
export default GetClient

