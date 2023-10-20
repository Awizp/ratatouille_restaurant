import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import './Navbar.scss'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='navbar_container'>
            <div className='navbar_logo'>
                <p>RATATOUILLE</p>
            </div>

            <ul className='navbar_links'>
                <li className='p_opensans'><a href="#home"></a> Home</li>
                <li className='p_opensans'><a href="#about">About</a></li>
                <li className='p_opensans'><a href="#menu">Menu</a></li>
                <li className='p_opensans'><a href="#awards">Awards</a></li>
                <li className='p_opensans'><a href="#contact">Contact</a></li>
            </ul>

            <div className='navbar_login'>
                <a href="#login" className='p_opensans'>Log in / Register</a>
                <div />
                <a href="/" className='p_opensans'>Book Table</a>
            </div>

            <div className='navbar_sm'>
                <GiHamburgerMenu color='#fff' width={27} onClick={() => setToggleMenu(true)} />

                {
                    toggleMenu &&
                    (<div className='navbar_sm-overlay flex_center slide-bottom'>
                        <MdOutlineRestaurantMenu className='overlay_close' width={27} onClick={() => setToggleMenu(false)} />

                        <ul className='navbar_sm-links'>
                            <li className='p_opensans'><a href="#home"></a> Home</li>
                            <li className='p_opensans'><a href="#about">About</a></li>
                            <li className='p_opensans'><a href="#menu">Menu</a></li>
                            <li className='p_opensans'><a href="#awards">Awards</a></li>
                            <li className='p_opensans'><a href="#contact">Contact</a></li>
                        </ul>
                    </div>)
                }
            </div>
        </nav>
    )
}

export default Navbar
