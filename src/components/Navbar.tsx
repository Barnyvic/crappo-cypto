import React , { useState }from 'react'
import Navlogo from "../images/logo.svg"
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Navbar () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <nav>
        <div className='Navbar-container container'>
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
                     <div className='border-login'/> 
                    <a href="/" className='register'>register</a>
                </div>
            </div>
                <div className="nav-icon" onClick={handleClick}>
                   {click ? <MdClose   className="menu" /> : <FiMenu   className="menu" />}
                </div>
                {click && (
                    <div className="navbar-smMenu">
                        <ul className='navbar-smMenu-list '>
                            <li className="mb-4"><a href="/">Products</a></li>
                            <li className="mb-4"><a href="/">Features</a></li>
                            <li className="mb-4"><a href="/">About</a></li>
                            <li className="mb-4"><a href="/">contact</a></li>
                            <li className="mb-4"><a href="/">Login</a></li>
                            <li className="mb-4"><a href="/">rigister</a></li>
                        </ul>
                    </div>
                )}
        </div>
    </nav>
  )
}

export default Navbar