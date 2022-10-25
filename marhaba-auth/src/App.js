import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './Components/Header'

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
        <Routes>
          <Route path='/Login' element={< Login />} />
          <Route path='/Register' element={< Register />} />
        </Routes>
    </div>
    </Router>
    </>
  )
}


export default App;
