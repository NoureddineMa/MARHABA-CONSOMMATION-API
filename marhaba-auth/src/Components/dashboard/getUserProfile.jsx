import axios from 'axios';
import { useState } from 'react';
import '../../index.css'
import me from '../../assets/me.jpg'

function GetUser() {

  const [message,setMessage] = useState("")
  const [succes, setSucces] = useState(false)
  const [Role, setRole] = useState("")
  const [Phone , setPhone ] = useState("")
  const [Email , setEmail ] = useState("")
  const [Adresse , setAdresse ] = useState("")
  const [userName , setUserName] = useState("")


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
        // retrieve details: 
        setAdresse(response.data.user.adresse)
        setEmail(response.data.user.email)
        setPhone(response.data.user.phone)
        setUserName(response.data.user.name)
        setMessage(response.data.message)
        setRole(role)
        setSucces(true)})
        .catch((err) => {
            setMessage(err.response.data.message)
            setSucces(false)
    })
    }
    getManagerHandler()
    return (
<div className='flex  justify-evenly  '>
        <div className='mt-20     dark:bg-gray-800  rounded-2xl w-2/5 py-10 shadow-xl animate__animated animate__zoomIn'>
              <h1 className='text-white font-bold text-2xl tracking-wide text-center mt-5'>Modify your profile</h1>
            <form className="w-3/5 mx-auto">
              <div className='flex items-center space-x-6'>
                <div className="shrink-0 mx-auto">
                   <img  className="h-20 w-20 object-cover rounded-full my-10 " src={me} />
                </div>
                </div>

                <label className="text-white text-xs">Choose a picture</label>
                   <input type="file" className="block w-full text-sm rounded text-slate-500 file:mr-4 file:py-2 file:px-4 border file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700hover:file:bg-violet-100 my-3 " />
                


                
                <label className='text-white text-xs' htmlFor="">Name</label>
                 <input type="email" name="email" className=" block w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 my-3" placeholder={userName} />
                

                 <label className='text-white text-xs' htmlFor="">Adresse Mail</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder={Email}/>

                 <label className='text-white text-xs' htmlFor="">Phone Number</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder={Phone} />
                 

                 <label className='text-white text-xs' htmlFor="">Adresse</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder={Adresse} />


                 <label className='text-white text-xs' htmlFor="">Role</label>
                  <select class="mt-1 px-3 py-2 bg-white border cursor-not-allowed shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 block w-full" aria-label="Disabled              select example" disabled>
                      <option selected>{Role}</option>
                 </select>
                 <button class="bg-orange-600 hover:bg-orange-700 my-4  text-white font-bold py-2 px-10 rounded">Modify</button>
            </form>
        </div>
         {/* <p> { succes && message }</p>
         <p> {!succes && message}</p> */}
         <div className='w-2/5'>
           <div className=" dark:bg-gray-800 py-10  rounded-2xl mb-9  shadow-xl mt-20  animate__animated animate__zoomIn  ">
          <h2 className="text-white font-bold text-2xl tracking-wide text-center my-16">Profile</h2>
              <p className=" text-white text-center font-semibold my-4  text-ce">Username : <span className='text-white font-light'>{userName}</span></p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Role : <span className=' text-white font-light '>{Role}</span> </p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Adresse : <span className=' text-white font-light '>{Adresse}</span> </p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Phone : <span className=' text-white font-light '>{Phone}</span> </p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Email : <span className=' text-white font-light '>{Email}</span> </p>


        </div>
        <div className=" dark:bg-gray-800  rounded-2xl  shadow-xl py-7   animate__animated animate__zoomIn ">
          <div className='text-center my-10 py-10'>
          <svg className='mx-auto  my-10' width={30} height={30} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <rect width={100} height={100} fill="url(#pattern0)" />
  <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
      <use xlinkHref="#image0_54_2" transform="scale(0.01)" />
    </pattern>
    <image id="image0_54_2" width={100} height={100} xlinkHref="data:image/png;base64,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" />
  </defs>
</svg>



              <p className='text-white text-lg font-thin'>No Data Available</p>
          </div>
        </div>
         </div>
       
        
</div>
    )
}
export default GetUser