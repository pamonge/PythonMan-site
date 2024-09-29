import React from 'react'
import styles from './NavBarComponentStyles.module.css'
import { NavLink } from 'react-router-dom'
import pythonManLogo from '../assets/images/site imgs/python man.png'

export const NavBarComponent = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={ pythonManLogo } ></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page" >Inicio</ NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" >Acerca de</ NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link" >Blog</ NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/booking" className="nav-link" >Booking</ NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/store" className="nav-link" >Tienda</ NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" >Contacto</ NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
