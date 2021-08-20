import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'


function Navbar() {
    const [isOpen, setOpen] = useState(false)

    const closeMobileMenu = () => setOpen
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        DP Photography
                    </Link>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
