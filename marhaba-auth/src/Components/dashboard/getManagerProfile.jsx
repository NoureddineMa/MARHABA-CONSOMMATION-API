import axios from 'axios';
import { useState } from 'react';

function GetClient() {

  const [message,setMessage] = useState("")
  const [succes, setSucces] = useState(false)


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
        // retrieve UserName:
        console.log(response.data.message)
        setMessage(response.data.message)
        setSucces(true)})
        .catch((err) => {
          console.log(err.response.data.message);
          setMessage(err.response.data.message)
          setSucces(false)
    })
    }
    getManagerHandler()
    return (
      <div className=''>
         <p> { succes && message }</p>
         <p> {!succes && message}</p>
      </div>
    )
}


export default GetClient