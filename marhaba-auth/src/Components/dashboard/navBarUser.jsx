import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Image from  '../../assets/favlogo.png'
import Logout from '../logout'



function navBarUser() {

 
  const User = localStorage.getItem("User")

  return (
    <div>
    <header>
    <nav className="bg-white border-gray-200 px-4  py-2.5 dark:bg-gray-800 w-screen">
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex justify-start items-center">
        <Link to="/" className="flex mr-4">
          <img src= {Image} className="mr-3 h-8 ml-20" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap User px-3">MARHABA LIVRAISON</span>
        </Link>
      </div>
{/* <!-- Dropdown menu --> */}
<div iclass="  z-10 w-44 bg-white rounded  divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 flex items-stretch dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
          <Link to="/dashboard" class="block py-2 px-4  dark:hover:text-white" type="button">{User} </Link> 
      </li>
      <li>
        <Link to="/dashboard" class="block py-2 px-4   dark:hover:text-white">Dashboard </Link>
      </li>
      <li>
        <Link to="/dashboard/me" class="block py-2 px-4   dark:hover:text-white">Profile</Link>
      </li>
      <li>
      <Logout />
      </li>
    </ul>
</div>
    </div>
  </nav>
</header>
</div>

  )
}

export default navBarUser