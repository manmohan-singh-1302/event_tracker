import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './Header'
import './bgstatic.css'

const myStyle={
    backgroundImage:'url("/bg.jpg"})',
            height:'100vh',
            marginTop:'-70px',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            };


const Addcomp = () => {
    const [selectedFiles,setSelectedfiles] = useState([])
    const [data,seData] = useState({
        compname:"",
        email:"",
        lastdate:"",
        description:"",
        rounds:"",
        compPic:"",
    })
    
    const {compname,
    email,
    lastdate,
    description,rounds,compPic} = data

    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }

    const fileHandler = (e) =>{
        console.log("Hi");
        console.log(e.target.files);
        // this.setState({selectedFiles:e.target.files})
        setSelectedfiles(e.target.files)
       }

    const fileUpload = () =>{  
         console.log("hello")
        if(compname && 
            email &&
            lastdate &&
            description && rounds ){

                    for(let i=0;i<selectedFiles.length;i++){
                        let formData = new FormData()
                        formData.append('file',selectedFiles[i]);
                        formData.append('upload_preset','bvfppdbk');
                        axios.post('https://api.cloudinary.com/v1_1/drnndbow7/image/upload',formData).then(res =>{
                            console.log(res.data.url)

                            
                        
                        axios.post('http://localhost:5000/compregister',{compname:compname,
                        email:email,
                        lastdate:lastdate,
                        description:description,rounds:rounds,compPic:res.data.url}).then(res =>{ console.log(res.data)  });
                        alert("Data Added");
                        
                        })
                    }
                    
          
        }
        else{
          alert("give valid inputs")
        }
      }

     
    

    
      

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }

    return (
        <div className= 'back'>
            
            <Header />
            <div>  </div>
            {/* <div className="profile bg-light card " style={{"margin":"10px","width": "25.5rem"}}> */}
            <center><section className="container">
                <h1 className="large " style={{"color":"#30332E","marginTop":"50px"}}>Register a New Event</h1>
                {/* <p className="lead"><b> Create Account for company</b></p> */}<br></br>
                <form  >
                    <input style={{width:"41%"}} type="text"             placeholder="Event Name*"            onChange={changeHandler} value={compname} name="compname" /><br /><br />
                    <input style={{width:"41%"}} type="email"            placeholder="Event Organizer*"   onChange={changeHandler} value={email} name="email" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="Description"      onChange={changeHandler} value={description} name="description" /><br /><br />
                    {/* <input style={{width:"41%"}} type="text"             placeholder="Eligibility"      onChange={changeHandler} value={eligibility} name="eligibility" /><br /><br /> */}
                    {/* <input style={{width:"41%"}} type="text"             placeholder="Event Organizer"           onChange={changeHandler} value={salary} name="salary" /><br /><br /> */}
                    <input style={{width:"41%"}} type="text"             placeholder="No. of Rounds*"          onChange={changeHandler} value={rounds} name="rounds" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="Last Date for Application*"        onChange={changeHandler} value={lastdate} name="lastdate" /><br /><br />
                    {/* <input style={{width:"41%"}} type="text"             placeholder="Company Website"             onChange={changeHandler} value={link} name="link" /><br /><br /> */}
                    <input style={{width:"41%"}} type="file"             onChange={fileHandler}/><br/><br/>

                    <input type="button" className="btn btn-secondary" value="Register" onClick={fileUpload} />
                </form>
                
            </section><br /><br />
            </center>{/*</div> */}

     
        </div>
    )
}

export default Addcomp
