import Register from './Components/Register'
import Login from './Components/login'
import Background from './Components/Background'
import Forgotpassword from './Components/forgotpassword'
import VerifyEmail from './Components/auth/verifyEmail'
import Resetpassword from './Components/ResetPassword'
import PageNotFound from './Components/no results/404'
import GetUserProfile from './Components/dashboard/getUserProfile'


import './index.css'

import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {


  const role = localStorage.getItem("role")
 
  return (
    <Router>
    <div className='flex w-full h-screen' >
    <Routes>  
      <Route path='/*' element={<PageNotFound />} />
      <Route element={<Background />}>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>    
        <Route path='/register/verify/:token' element={<VerifyEmail />}/>
      <Route path='/forgotpassword' element={<Forgotpassword />}/>
      <Route path='/resetpassword/:token' element={<Resetpassword />}/>
      </Route>
      <Route path='/me'  element={ role ? (<GetUserProfile />) : <PageNotFound />} />
    </Routes>
    </div>
    </Router>
  )
}

export default App;
