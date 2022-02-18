import React from 'react';
import {  Button, Container} from 'react-bootstrap';
import img1 from './cat-gc129804f0_1920_499x333.jpeg'
import img2 from './doctor.png'
import './Appointment.css'
import { Link } from 'react-router-dom';
const Appointment = () => {
    const bg={
        background:`url(${img1})`,
        marginTop:110,
        backgroundColor:'rgba(20,40,30,0.8)',
backgroundBlendMode:'darken,luminosity',
marginBottom:20
        
    }
    return (
        <>
         <h1 style={{marginTop:'105px'}}> <span  style={{color:'blue',fontSize:'2rem',fontWeight:'bold'}}>Book The</span> <span  style={{color:'red',fontSize:'2rem',fontWeight:'bold'}}>Appointment!!</span> </h1>
         <hr className='w-50 mx-auto mb-2 mt-0 ' style={{color:'blue'}}/>
          <div style={bg} className='appoint'  >
          
          <img src={img2}  style={{width:400,marginTop:'-120px'}} alt="" />
          <div>
          <h3 style={{color:'white'}}>Appoint Them!</h3>
          <Link to='/bookappointment'>
          <Button variant="success">Appoint The Doctors!!Click Here</Button>
          </Link>
        
          </div>
       
              </div>
        </>
      
    );
};

export default Appointment;