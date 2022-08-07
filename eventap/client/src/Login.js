import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import './bgstatic.css'
import './vjitlogo.png'

const Login = () => {
    const [auth,setAuth] = useState(false)
    const [data,seData] = useState({
        email : '',
        password : '',
    })
    const {email,password} = data
    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        if(email && password && email==="vjit@gmail.com" && password==="123456"){
            localStorage.setItem('token',"12vjit");
            setAuth(true)
        }
        else{
            alert("Enter Valid Inputs")
        }
    }

    if(auth){
        return <Navigate to='/dashboard' />
    }

    return (
    <div className = 'back'>
        <div>
        <center><img src={require('./vjitlogo.png')} height="100px" width="auto"/></center>
        {/* <nav className="navbar bg-secondary justify-content-center">
            <h2 style={{"text-color":"white"}}>
                Event Hub
            </h2>
           <div className="justify-content-left" >
                <h5 >
                   
                    <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                </h5>
            </div> 
            
        </nav> */}
            
            <section className="container">
                <center>
                <h1 className="large " style={{"color":"#30332E","marginTop":"100px"}} >Admin Sign In</h1><br/><br />
                {/* <p className="lead"><b>Sign into Your Admin Account</b></p> */}
                <form onSubmit={submitHandler}>
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="email"    placeholder="Enter Mail ID"    name="email" value={email}   onChange={changeHandler} /><br /><br />
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="password" placeholder="Enter Password"   name="password" value={password} onChange={changeHandler} /><br /><br />
                    <input type="submit" className="btn btn-secondary" value="Login" />
                </form>
                </center>
            </section>
        </div>
        </div>
    )
}

export default Login
