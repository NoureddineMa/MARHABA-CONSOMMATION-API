import * as react from 'react';
import image from '../assets/logo.png'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Forgotpassword() {
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
 
        <label 
        for="Password" 
        className='text-xs font-medium'>Password
        </label>
        <input 
        id="Password" 
        name="Password" 
        type="Password" 
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
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-fuchsia-700 text-white  font-bold rounded-xl'>Reset password 
        </button>
        </div>
        </div>
        </div>
    )
}