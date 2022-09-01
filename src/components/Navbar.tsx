import React , { useState }from 'react'
import Navlogo from "../images/logo.svg"
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <nav>
        <div className='Navbar-container'>
            <div className='Navbar-brand'>
                <a href='/' className='Navbar-brand'>
                    <img src={Navlogo} alt='Logo' />
                </a>
            </div>
            <div className='Navbar-menucontainer'>
                <ul className='Navbar-menu'>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
                <div className="login">
                    <a href="/">Login</a>
                     <div className='border'/> 
                    <a href="/" className='register'>register</a>
                </div>
            </div>
                <div className="nav-icon" onClick={handleClick}>
                   {click ? <GrClose   className="menu" /> : <FiMenu   className="menu" />}
                </div>
                {click && (
                    <div className="navbar-smMenu">
                        <ul className='navbar-smMenu-list'>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Features</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">contact</a></li>
                        </ul>
                        <div className="login">
                            <a href="/">Login</a>
                            <div className='border'/> 
                            <a href="/" className='register'>register</a>
                        </div>
                    </div>
                )}
        </div>
    </nav>
  )
}

export default Navbar