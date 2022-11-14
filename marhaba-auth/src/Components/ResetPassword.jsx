import {useState} from 'react';
import image from '../assets/logo.png'
import '../index.css'
import axios from 'axios';
import {useParams , useNavigate } from 'react-router-dom';
import { showMessage } from './utiles/showMessage';


const  ResetPassword = () =>  {

    const navigate = useNavigate();
    const {token} = useParams();
    const [password , setPassword] = useState("");
    const [message , setMessage] = useState("");
    const [isError , setIsError] = useState(false)

    const handleEmail = (e) => {
        return setPassword(e.target.value)
    }

    const API_URL = `http://localhost:7000/api/auth/resetpassword/${token}`

    const resetPassword = async () => {

     const 
     user= {
        password,
     }   
     try {
        const result = await axios.post(API_URL, user)
        setMessage(result.data.message)
        setIsError(false)
        setTimeout(() => { navigate('/login') }, 2000);
     } catch (error) {
        console.log(error)
        setIsError(true)
        
     
     }

    }

    return (
        <div 
        className='bg-gray-50 px-20 py-5 animate__animated animate__zoomIn  shadow-xl rounded-2xl border-2 border-gray-200 flex flex-col place-items-center'>

        <img
        src={image} 
        alt="img" 
        className='logo' />

        
        <p 
        className='text-lg text-center font-bold tracking-tight text-fuchsia-900'>enter your new password
        </p>
        <div 
        className='mt-4 '>
        <div>

        <p className='text-white'>  { message &&  showMessage( isError , message)}
</p>
 
        <label 
        for="Password" 
        className='text-xs font-medium'>Password
        </label>
        <input 
        id="Password" 
        name="Password" 
        type="Password" 
        value={password}
        onChange={handleEmail}
        autocomplete="Password" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your new Password " />


        <label 
        for="Password" 
        className='text-xs font-medium'>Confirm Password
        </label>
        <input 
        id="Password" 
        name="Password" 
        type="Password" 
        autocomplete="Password" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="confirm Password " />

        </div>

        
                
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-fuchsia-700 text-white  font-bold rounded-xl' 
        onClick={resetPassword}>Reset password 
        </button>
        </div>
        </div>
        </div>
    )
}

export default ResetPassword;