import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="header">
           <Link to="/">
            <img className='logo' src={"./img.logo.png"} alt='logo'/>
            </Link>
            <nav className="navbar">
                <ul>
                   <li>
                    <NavLink to="categoria/Neumatica">Suspension Neumatica</NavLink>
                   </li>
                   <li>
                    <NavLink to="categoria/regulable">Suspension Regulable</NavLink>
                   </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar
