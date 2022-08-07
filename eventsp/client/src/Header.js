import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"#010400"}}>

            
            <li className="nav-link ">
                <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#56CEDB' : '#FFFDFB' })}>
                    Discover Events
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/registeredcompanies" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#56CEDB' : '#FFFDFB' })}>
                    Your Events
                </NavLink>
            </li>
            {/* <li className="nav-link ">
                <NavLink to="/selectedcompanies" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#56CEDB' : '#FFFDFB' })}>
                    Download Certificates
                </NavLink>
            </li> */}
            <li className="nav-link">
                <NavLink to="/login" className="btn btn-secondary" >
                    Logout
                </NavLink>
            </li>
           

        </nav>
    )
}

export default Header
