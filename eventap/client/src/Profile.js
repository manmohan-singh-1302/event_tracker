import React,{useState,useEffect} from 'react'
import { Navigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import './bg.css';

const Indprofile = () => {
    const {id}=  useParams()
   
    const [iprofile,setIprofile] = useState(null)
    const [students,setStudents] = useState([])
    const [selectedstudents,setselectedstudents] = useState([])

    useEffect(()=>{
                
        axios.get(`http://localhost:5000/indcompprofile/${id}`).then(
            res => setIprofile(res.data)
        )
        console.log(id)

        axios.get(`http://localhost:5000/indregcompprofilestudent/${id}`).then(
            res => setStudents(res.data)
        )

        axios.get(`http://localhost:5000/indregcompprofilestudent/${id}`).then(
            res => setselectedstudents(res.data.filter(profile => profile.hrround))
        )

    },[])


  

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    

 
    return (
        <div className= 'first'>
             <Header />
             { iprofile && <div>
            
            
                <center>
                        {/* <img 
                            className="round-img"
                            src="https://assets-global.website-files.com/5d9bc5d562ffc22c37470958/5fce6ee18b204291c8598510_React%20Native%20Developer%20Hiring%20Guide.svg"
                            height="250" width="450"
                            alt="pix"
                        /> */}
                        <div>
                        <div className="profile bg-light card " style={{"margin":"10px","width": "25.5rem"}}>{iprofile.compPic ? <div><img src={iprofile.compPic} style={{border:"3px solid grey"}} width="450px" className="card-img-top" alt="img" /></div> : null}</div>
                            <h2 style={{"color":"grey"}}>{iprofile.compname}</h2>
                            {/* <p><b>Company Mail: </b>{iprofile.email}</p> */}
                            <p><b>Event Description: </b>{iprofile.description}</p>
                            {/* <p><b>Eligibility: </b>{iprofile.eligibility}</p> */}
                            <p><b>Organised by: </b>{iprofile.email}</p>
                            <p><b>Last Date for Registration: </b>{iprofile.lastdate}</p>
                            <p><b>Number of Rounds: </b>{iprofile.rounds}</p>
                        </div>
                        <br /><br />

                        
                        {
                            students.length>=1 ?
                             
                            <div>
                                <h4 style={{color:"brown"}}>Students</h4>
                                {students.map(profile =>
                                <div className='card' style={{"margin":"10px","width": "25.5rem"}}>
                                    <h5 style={{color:"blue"}}>{profile.studentname}</h5>
                                    <h6><b>HT No.:</b>{profile.clgId}</h6>
                                    {/*<h6><b>Number of rounds completed:</b> {profile.writtentest ? (profile.technicalround ? (profile.hrround ? "3" : "2") : "1") : "0"}</h6>*/}
                                    </div>
                                    )}
                            </div>
                            :
                            <h4 style={{color:"#30332E"}}>No student has registered for this event yet.</h4>
                        }

                        <br /><br />
                        
                        {/* {
                            selectedstudents.length>=1 ?
                             
                            <div>
                                <h5 style={{color:"brown"}}>Selected Students</h5>
                                {selectedstudents.map(profile =>
                                <div className='card' style={{"margin":"10px","width": "25.5rem"}}>
                                    <h5 style={{color:"blue"}}>{profile.studentname}</h5>
                                    <h6><b>HT No.:</b>{profile.clgId}</h6>/
                                    <h6><b>Number of rounds finished:</b> {profile.writtentest ? (profile.technicalround ? (profile.hrround ? "3" : "2") : "1") : "0"}</h6>
                                    </div>
                                    )}
                            </div>
                            :
                            <h3 style={{color:"red"}}>No student has been selected for this company yet.</h3>
                        } */}
                </center>
                
            </div>
            

}
        </div>
    )
}

export default Indprofile
