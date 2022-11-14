import { Outlet} from 'react-router-dom'
import NavBarUser from './navBarUser'




function Dashboard() {


  const Name = localStorage.getItem("User")
  const Role = localStorage.getItem("role")

  return (
  <div> 
   <NavBarUser />
   <p className=' flex  justify-center mt-20 text-2xl font-bold text-white  '>
      Hey  { Name }   Welcome To  Your Space  { Role }
    </p>
   <Outlet />
  </div>  
  )
} 
export default Dashboard