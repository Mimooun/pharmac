import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/images/SOSpharma2.png'
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
                            <li>Products</li>
                            <li>Pages</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="btn">
                         <button className='button'>Passer une commande</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
