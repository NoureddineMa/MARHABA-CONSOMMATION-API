import axios from 'axios';
import { useState } from 'react';

function GetClient() {

  const [message,setMessage] = useState("")
  const [error, setError] = useState(false)

    const getManagerHandler =  () => {
    const token = localStorage.getItem("token")    
    // console.log(token);
    const config = {
        headers: {
          Authorization :  'Bearer ' + token
        },
        withCredentials: true
      }
    const API_URL = "http://localhost:7000/api/user/manager/me/"
     axios.get(API_URL,config).then((response) => {
        console.log(response.data.message)
        setMessage(response.data.message)
        setError(false)
    }).catch((err) => {
        console.log(err.response.data.message)
        setMessage(err.response.data.message)
        setError(true)
    })
    }

    getManagerHandler()
    return (
        <div>{message}</div>
    )

}


export default GetClient