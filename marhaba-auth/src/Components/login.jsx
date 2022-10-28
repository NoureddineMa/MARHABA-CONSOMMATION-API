import * as react from 'react';
import image from '../assets/logo.png'
import '../index.css'
import { Link } from 'react-router-dom'



export default function Login() {
    
    



    return (
        <div 
        className='bg-gray-50 px-20 py-5 shadow-xl  rounded-2xl border-2 animate__animated animate__zoomIn     border-gray-200 flex flex-col place-items-center'>

        <img
        src={image} 
        alt="img" 
        className='logo' />

        <h1 
        className='mt-2 mb-2 text-center text-3xl font-bold tracking-tight text-fuchsia-900'>Welcome Back
        </h1>

        <p 
        className='text-xs font-medium text-fuchsia-900'>Welcome Back please enter your details
        </p>
        <div 
        className='mt-4 '>
        <div>
 
        <label 
        for="email" 
        className='text-xs font-medium'>Email
        </label>
        <input 
        id="email" 
        name="email" 
        type="email" 
        autocomplete="email" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="EnteYour email address" />

        <label 
        for="password" 
        className='text-xs font-medium'>password
        </label>
        <input 
        id="password" 
        name="password" 
        autocomplete="password" 
        required 
        type="password" 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter a password" />
        </div>
                
        <div 
        className='flex flex-row place-items-center justify-between mt-3'>
        <div 
        className="flex items-center mb-4">
        <input 
        id="default-checkbox" 
        type="checkbox" 
        value="" 
        class="w-4 h-4 text-fuchsia-600 bg-gray-100 rounded border-gray-300 focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600 dark:ring-offset-fuchsia-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />


        <label 
        for="default-checkbox" 
        className="ml-2 text-sm font-medium text-dark">Remember me
        </label>
        </div>
        <div 
        className='flex  flex-col   align-items-center justify-content-center'>
        <Link  
        to="/forgotpassword" 
        className=' text-center mb-4 text-xs font-medium text-fuchsia-900'>forgot password? 
        </Link>
        </div>
        </div>
                    

        <p 
        className='text-xs text-black-500 text-center mt-3'>You dont have an account? <br /> 
        <Link 
        to="/Register" 
        className='text-fuchsia-800 underline'>click here to Register
        </Link> 
        </p>
                    
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-fuchsia-700 text-white  font-bold rounded-xl'>Sign in
        </button>
        </div>
        </div>
        </div>
    )
}