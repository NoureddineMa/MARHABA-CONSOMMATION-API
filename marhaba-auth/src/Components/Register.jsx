import  {useState} from 'react';
import image from '../assets/logo.png'
import '../index.css'
import { Link   } from 'react-router-dom'
import axios from 'axios';
import { showMessage } from './utiles/showMessage';

const Register = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword]= useState("")
    const [phone, setPhone] = useState("")
    const [adresse, setAdresse] = useState("")
    const [role, setRole]  = useState("")
    const [Succes, setMessage] = useState(false)
    const [isError, setIsError] = useState(false)

      const handleName = (e)=>{
        return setName(e.target.value)
      }
      const handleEmail = (e)=>{
        return setEmail(e.target.value)
      }
      const handlePassword = (e)=>{
        return setPassword(e.target.value)
      }
      const handlePhone = (e)=>{
        return setPhone(e.target.value)
      }
      const handleAdresse = (e)=>{
        return setAdresse(e.target.value)
      }
      const handleRole = (e) => {
        return setRole(e.target.value)
      }
      const API_URL = 'http://localhost:7000/api/auth/register';

      const registerHandler = async ()=>{
        const 
        user={
          name,
          email,
          password,
          phone,
          adresse,
          role
        }
       
       try {
         const result = await axios.post(API_URL , user)
         console.log(result.data.message)
         setMessage(result.data.message)
         isError(false);
        //  )
       } catch (error) {
         console.log(error.response.data.message)
        //  setMessage(error.response.data.message)
        //  isError(true)
       }
      }

    return (
      
        <div 
        className='bg-gray-50 px-20 py-5 shadow-xl   rounded-2xl border-2 animate__animated animate__zoomIn border-gray-200 flex flex-col place-items-center'>
        <img 
        src={image}  
        alt="img" 
        className='logo' />
        <h1 
        className='mt-2 text-center text-3xl font-bold tracking-tight text-fuchsia-900'>Create your account
        </h1>
        { Succes &&  showMessage( isError , Succes)}
        <div 
        className='mt-4 '>
        <div>

        {/* input Name:*/}
        <label 
        for="name" 
        className='text-xs font-medium'>Name
        </label>

        <input 
        id="name"
        value={name}
        onChange={handleName}
        name="name" 
        type="name" 
        required 
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm " 
        placeholder="Enter Your Name" />
        {/* end input Name  */}


        {/* input email */}
        <label 
        for="email" 
        className='text-xs font-medium'>Email
        </label>
        <input 
        id="email" 
        value={email}
        onChange={handleEmail}
        name="email" 
        type="email" 
        autoComplete="email" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm" placeholder="Enter Your email address" />
        {/* end input email  */}

        {/* inut password */}
        <label 
        for="password" 
        className='text-xs font-medium'>password
        </label>
        <input 
        id="password" 
        name="password" 
        value={password}
        onChange={handlePassword}
        type="password" 
        autoComplete="password" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm" 
        placeholder="***************" />
        {/* end input password */}
        </div>

        {/* input Phone */}
        <label 
        for="phone" 
        className='text-xs font-medium'>Phone
        </label>

        <input 
        id="Phone" 
        value={phone}
        onChange={handlePhone}
        name="Phone Number" 
        type="Phone Number" 
        autoComplete="Phone Number" 
        required 
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 my-1 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm" 
        placeholder="06 XX XX XX XX " />
        {/* end input Phone */}


        {/* adresse input  */}
        <label 
        for="Adresse" 
        className='text-xs font-medium'>Adresse
        </label>

        <input 
        id="adresse" 
        value={adresse}
        onChange={handleAdresse}
        name="adresse" 
        type="adresse" 
        autoComplete="adresse" 
        required 
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 my-1 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm" 
        placeholder="Enter your adresse " />
        {/* end adresse input  */}



        {/* input select role */}
        <select 
        id="role" 
        name="role" 
        value={role}
        onChange={handleRole}
        type="role" 
        autoComplete="role" 
        required 
        className="mt-3 block w-full  rounded-none rounded-t-md border  px-3 py-2 text-gray-900  focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm">
        <option selected>Choose your Role</option>
        <option 
        value="client">Client
        </option>
        <option 
        value="livreur">Livreur
        </option>
        </select>
        {/* end seelct role  */}
                
        <div 
        className='flex  flex-col mt-2  align-items-center justify-content-center'>
        <p 
        className='text-perso text-black-500 text-center mb-3 mt-3  '> By clicking <span className='font-bold text-fuchsia-800'>Register</span>  you agree to Marhaba  <br/>Livraison <span className='font-semibold text-fuchsia-800 underline'>Terms</span>  and  <span className='font-semibold underline text-fuchsia-800'>Privacy Policy</span>
        </p>
        <p 
        className='text-xs text-black-500 text-center mt-3 '>you already have an account ? <br /> <Link to="/login" className='text-fuchsia-800 underline'>click here to login</Link> 
        </p>
        </div>
                
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-fuchsia-700 text-white  font-bold rounded-xl' 
        onClick={registerHandler}>Sign up
        </button>
        </div>
        </div>
        </div>
    )
}


export default  Register;