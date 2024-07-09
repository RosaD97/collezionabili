import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../img/logo.png';
import Footer from '../components/Footer'

function Layout() {
    return (
        <div className=''>
            <div className='section p-5 header'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className='img-wrapper'>
                        <img src={logo} alt="logo-pikachu" />
                    </div>
                    <nav className=''>
                        <ul className='d-flex m-0 justify-content-between'>
                            <li>
                                <NavLink className='navtitle px-3' to="/">HomePage</NavLink>
                            </li>
                            <li>
                                <NavLink className='navtitle px-3' to="/">Pokemon</NavLink>
                            </li>
                            <li>
                                <NavLink className='navtitle px-3' to="/">Blog</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout