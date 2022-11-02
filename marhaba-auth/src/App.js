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
    <div className='w-full flex items-center justify-center lg:w-1/2' style={{backroundColor:'red'}}>
    <Routes>  
    <Route path='/*' element={<PageNotFound />} />
    <Route path='/register' element={<Register />}/>
    <Route path='/register/verify/:token' element={<VerifyEmail />}/>
    <Route path='/forgotpassword' element={<Forgotpassword />}/>
    <Route path='/resetpassword/:token' element={<Resetpassword />}/>
    <Route path='/GetClient' element={<GetClientProfile />} />
    <Route path='/GetLivreur' element={<GetLivreurProfile />} />
    <Route path='/getManager' element={<GetManagerProfie />} />
    <Route path='/login' element={<Login />}/>    
    </Routes>
    </div>
    <Background />
    </div>
    </Router>
  )
}


export default App;
