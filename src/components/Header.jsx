import React from 'react'
import logo from '../img/logo.png';

function Header() {
    return (
        <div className='section p-5 header'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='img-wrapper'>
                    <img src={logo} alt="logo-pikachu" />
                </div>
                <nav className=''>
                    <ul className='d-flex m-0 justify-content-between'>
                        <li>
                            Homepage
                        </li>
                        <li>
                            Pokemon
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header