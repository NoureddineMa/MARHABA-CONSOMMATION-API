import Register from './Components/Register'
import Login from './Components/login'
import Background from './Components/Background'
import Forgotpassword from './Components/forgotpassword'
import VerifyEmail from './Components/auth/verifyEmail'
import Resetpassword from './Components/ResetPassword'
import PageNotFound from './Components/no results/404'
import GetClientProfile from './Components/dashboard/GetClientProfile'
import GetLivreurProfile from './Components/dashboard/getLivreurProfile'
import GetManagerProfie from './Components/dashboard/getManagerProfile'


import './index.css'

import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
 
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
      <Route path='/GetClient' element={<GetClientProfile />} />
      <Route path='/GetLivreur' element={<GetLivreurProfile />} /> 
      <Route path='/getManager' element={<GetManagerProfie />} />
    </Routes>
    </div>
    </Router>
  )
}


export default App;
