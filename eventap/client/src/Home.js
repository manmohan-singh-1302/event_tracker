import React from 'react'
import { Link } from 'react-router-dom'
import './bgstatic.css'
import './vjitlogo.png'

const Home = () => {
    return (
        <div className = 'back'>
        <div>
            <center>
                <section>
                <img src={require('./vjitlogo.png')} height="300px" width="auto"/>
                        <h1 style={{"marginTop":"100px"}}>VJIT Event Hub</h1>
                        <p >
                            Register and analyze events through the admin portal
                        </p>
                        <Link to='/login' className="btn btn-secondary">Admin Login</Link>
                    
                </section>
                
                
            </center>
        </div>
        </div>
        
    )
}

export default Home


