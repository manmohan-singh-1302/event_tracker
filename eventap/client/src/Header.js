import React from 'react'
import { NavLink } from 'react-router-dom'
import './vjitlogo.png'

const Header = () => {
    return (
        
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"#010400"}}>
            
            
            <li className="nav-link ">
                <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#56CEDB' : '#FFFDFB' })}>
                    All Events
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/addcompany" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#56CEDB' : '#FFFDFB' })}>
                    Add new Events
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/login" className="btn btn-secondary" >
                    Logout
                </NavLink>
            </li>
            {/* <li className="nav-link">
                <NavLink to="/login" className="nav-link" onClick={()=>localStorage.clear()} style={({ isActive }) => ({ color: isActive ? '#56CEDB' : '#FFFDFB' })}>
                    Logout
                </NavLink>
            </li> */}
           

        </nav>
    )
}

export default Header
