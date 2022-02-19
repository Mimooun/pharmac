import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/images/logo.png'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Prodacts</li>
                            <li>Pages</li>
                            <li>Blog</li>
                            
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
