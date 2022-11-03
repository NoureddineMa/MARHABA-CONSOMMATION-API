import axios from 'axios';
import { useState } from 'react';

function GetClient() {

  const [message,setMessage] = useState("")
  const [succes, setSucces] = useState(false)


    const getManagerHandler =  () => {
    const token = localStorage.getItem("token")    
    const role = localStorage.getItem("role")

    // console.log(token);
    const config = {
        headers: {
          Authorization :  'Bearer ' + token
        },
        withCredentials: true
      }
    const API_URL = `http://localhost:7000/api/user/${role}/me/`
     axios.get(API_URL,config).then((response) => {
        // retrieve UserName:
        setMessage(response.data.message)
        setSucces(true)})
        .catch((err) => {
            setMessage(err.response.data.message)
            setSucces(false)
    })
    }
    getManagerHandler()
    return (
      <div className='items-center justify-center'>
         <p> { succes && message }</p>
         <p> {!succes && message}</p>
      </div>
    )
}
export default GetClient