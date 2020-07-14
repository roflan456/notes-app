import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
            <div className='navbar-brand'>
                Note app
            </div>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/" exact>Главное<span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">Информация</NavLink>
      </li>
    </ul>
        </nav>
    )
}