import * as react from 'react';
import image from '../assets/logo.png'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Forgotpassword() {
    return (
        <div 
        className='bg-gray-50 px-20 py-5 shadow-xl animate__animated animate__zoomIn rounded-2xl border-2 border-gray-200 flex flex-col place-items-center'>

        <img
        src={image} 
        alt="img" 
        className='logo' />

        <h1 
        className='mt-2  text-center mb-5 text-3xl font-bold tracking-tight text-fuchsia-900'>Reset Password
        </h1>

        <p 
        className='text-xs text-center font-medium text-fuchsia-900'>enter your email to reset  <br />your password
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
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your email " />
        </div>
                
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-fuchsia-700 text-white  font-bold rounded-xl'>Send Mail
        </button>
        </div>
        </div>
        </div>
    )
}