import React from 'react';
import { Card } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
const Doctor = (props) => {
    const{firstName,lastName,age,doctortype,availableTime,visitpay,Image}=props.doctor
    return (
        <div>
             <Card style={{ width: '20rem',height:'20rem',backgroundColor:'#84cfac'  }}>
  <Card.Img variant="top" src={Image}  style={{ width: '10rem',height:'8rem',textAlign:'center'  }} />
  <Card.Body>
    <Card.Title style={{ color:'black'  }}>Doctors Name: {firstName} {lastName}.And age is {age} years.</Card.Title>
    <Card.Text style={{ color:'black',fontWeight:'bold'}}>
    Doctors type:{doctortype} Available Time is: {availableTime}.
    You can pay {visitpay} Only.
    </Card.Text>


  
  </Card.Body>
</Card>     
        </div>
    );
};

export default Doctor;