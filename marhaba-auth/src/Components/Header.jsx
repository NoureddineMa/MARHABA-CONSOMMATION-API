import {FaSignInAlt , FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>MARHABA</ Link>
            </div>
            <ul>
                <li>
                    <Link to='/Login'>
                        <FaSignInAlt /> Register
                    </ Link>
                </li>
                <li>
                    <Link to='/Register'>
                        <FaUser /> Register
                    </ Link>
                </li>
            </ul>
        </header>
    )
}

export default Header