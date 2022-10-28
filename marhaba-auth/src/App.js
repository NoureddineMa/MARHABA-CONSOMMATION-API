import Register from './Components/Register'
import Login from './Components/login'
import Background from './Components/Background'
import Forgotpassword from './Components/forgotpassword'
import Resetpassword from './Components/ResetPassword'
import './index.css'

import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
 
  return (
    <Router>
    <div className='flex w-full h-screen'>
    <div className='w-full flex items-center justify-center lg:w-1/2'>

    
    <Routes>  
    <Route path='/register' element={<Register />}/>
    <Route path='/forgotpassword' element={<Forgotpassword />}/>
    <Route path='/resetpassword' element={<Resetpassword />}/>
    <Route path='/login' element={<Login />}/>
    
    </Routes>
    </div>
    <Background />
    </div>
    </Router>
  )
}


export default App
