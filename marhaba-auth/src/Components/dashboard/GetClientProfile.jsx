import axios from 'axios';


function GetClient() {
    const getClientHandler =  () => {
    const token = localStorage.getItem("token")    
    // console.log(token);
    const config = {
        headers: {
          Authorization :  'Bearer ' + token
        },
        withCredentials: true
      }
    const API_URL = "http://localhost:7000/api/user/client/me/"
     axios.get(API_URL,config).then((response) => {
        console.log(response.data.message);
    }).catch((err) => {
        console.log(err.response.data.message);
    })
    }
    getClientHandler()
    return (
        <div>HELLO </div>
    )

}


export default GetClient