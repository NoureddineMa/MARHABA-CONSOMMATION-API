import React from 'react'
import { Link , useNavigate } from 'react-router-dom'


function  Logout() {



    const  navigate = useNavigate();
    function  ClearLocalStorage() {
        localStorage.clear();  
    }
    
  return ( 
          <Link className='block py-2 px-4 hover:outline outline-2  outline-offset-2 dark:hover:bg-gray-600 dark:hover:text-white' to='/login' onClick={ClearLocalStorage}>logout</Link>
  )
}

export default Logout