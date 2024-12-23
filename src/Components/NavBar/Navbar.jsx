import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className="logo">Castor Suspensiones</a>
            <nav className="navbar">
                <a href="/">Inicio</a>
                <a href="/">Suspension Neumatica</a>
                <a href="/">Suspension Regulable</a>
                <a href="/">Contacto</a>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar
