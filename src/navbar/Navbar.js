import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [className, setClassName] = useState('')
    const [navMenu, setNavMenu] = useState('')

    const handleMenu = (e) => {
        if (className === 'hamburger') {
            setClassName('hamburger active')
        } else {
            setClassName('hamburger')
        }

        if (navMenu === 'nav-menu') {
            setNavMenu('nav-menu active')
        } else {
            setNavMenu('nav-menu')
        }
    }

    useEffect(() => {
        setNavMenu('nav-menu')
        setClassName('hamburger')
    }, []);

    return (
        <div className='navbar'>
            <div className='navBrand'>
                <a className='navbar-brand' href='/'>
                    MEHMET CABBAR
                </a>
            </div>
            <div className='navLink'>
                <ul onClick={handleMenu} className={navMenu}>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#works' className='nav-link'>Works</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' className='nav-link'>About w/ Contact</a>
                    </li>
                </ul>
                <div onClick={handleMenu} className={className}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </div>

        </div>

    )
}

export default Navbar