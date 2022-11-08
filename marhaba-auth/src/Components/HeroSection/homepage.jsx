import React from 'react'
import livreur from '../../assets/HomePage.png';
import '../../index.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png';



function homepage() {
  return (
    
    <div className="grid px-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 " >
     <nav className="dark:bg-gray-800  px-2 sm:px-4 py-2.5 navbar fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="/" className="flex items-center">
      <h3 className='px-10 User'>MARHABA LIVRAISON</h3>
    </Link>
    <div className="flex md:order-2">
      <Link to="/register" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center mr-3  px-10 md:mr-0 started">Regiser To marhaba</Link>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
      </button>
    </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className="mr-auto place-self-center lg:col-span-7 ">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl marhaba ">MARHABA <span className='span font-extrabold'>RESTAURANT</span> </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-sm dark:text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac diam in justo commodo eleifend. Cras condimentum ligula mi, eget suscipit ipsum porta sed. Aenean id mauris accumsan, fringilla libero et, bibendum nisl. Nulla vulputate metus vitae consectetur pretium. Sed eget ante id velit hendrerit vulputate. Mauris tincidunt leo a arcu ornare, nec commodo nisl feugiat. Duis vitae accumsan neque. Nunc sit amet ex vel tellus mattis tincidunt volutpat eu eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque convallis porttitor elit ac semper. Nullam quam diam, pharetra at tempor in, semper non justo. Fusce sed ultricies metus.</p>
      <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white Login">
       Login
      </Link>
      <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-violet-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-violet-500  dark:border-violet-700 ">
        Register
      </Link> 
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={livreur} alt="mockup" />
    </div>                
  </div>

  )
}

export default homepage