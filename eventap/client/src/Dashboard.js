import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"
import './bg.css'

const Dashboard = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
    const [tokenn,setTokenn] = useState(localStorage.getItem('token'))
    useEffect(()=>{
        axios.get('http://localhost:5000/getcomp').then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))

    },[search])
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    // console.log(tokenn)



    const searchHandler = e =>{
        e.preventDefault();
        console.log(search);
        axios.get('http://localhost:5000/getcomp').then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))
    
    }
    
    
    return (
        <div  className= 'first'>
            <Header />
            
            <section className="container">
            <center>   <h1 className="large " style={{"color":"#30332E","marginTop":"20px"}}>Admin Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand" style={{"color":"#30332E","marginTop":"20px"}}>Current Events</h3>

                    <form className="d-flex" onSubmit={searchHandler} >
                        {/* <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for events" aria-label="Search" /> */}
                        {/* <input className="btn btn-success" type="submit" value="Search"/> */}
                    </form>
                    
                </div>
            </nav>
            </center>

                <div className="profiles " >
                <div className = "row" >
                    {data.length>=1 ? 
                    data.map(profile => 
                        <div className='col-md-4'>
                        <div className="profile bg-light card " style={{"margin":"10px","width": "25.5rem"}}>
                        <center>
                           
                            <div>
                            
                            {profile.compPic ? <div><img src={profile.compPic} style={{border:"1px solid grey" }} height="400px" width="auto" className="card-img-top" alt="img" /></div> : null} 
                                <h2 style={{"color":"#6DAFED"}}>{profile.compname}</h2>
                                {/*<h6>Eligibility: {profile.eligibility} CGPA</h6>*/}
                                <h6>Organized by: {profile.email}</h6>
                                <h6>Last Date for Application: {profile.lastdate}</h6>
                                {/* <p>{profile.mobile}</p>*/}<br/>
                                <Link to={`/indprofile/${profile._id}`} className="btn btn-secondary">Know More</Link><br /><br />
                            </div>

                            
                        </center>
                        </div>
                        </div>
                        )
                    : null}
                </div>
                </div>
                


            </section>


            { tokenn === "undefined" && <Navigate to="/login" />}

        </div>
    )
}

export default Dashboard
