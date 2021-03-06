import React from 'react';
import { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{

        fetch('https://salty-reef-53570.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    
    },[])
    return (
        <div>
               <h1>Our Doctors!!</h1>
           
           <Container className='cnt' >
           <Row xs={1} md={3} className="g-5">
                {
doctors.map(doctor=><Doctor

    doctor={doctor}
 >
   </Doctor>)
                }
            </Row>
           </Container>       
        </div>
    );
};

export default Doctors;