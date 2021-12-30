import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png'

import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>

      <LinkContainer to="/home">
      <Navbar.Brand >

<img src={logo} alt="" />
</Navbar.Brand>
      </LinkContainer>
   
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
     <LinkContainer to="/seedoctors">
     <Nav.Link href="#features">See the Doctots</Nav.Link>
     </LinkContainer>
       

        <LinkContainer to="/bookings">
        <Nav.Link >Book Appointment Now!!</Nav.Link>
        </LinkContainer>
     
        
        <LinkContainer to="/login">
        <Nav.Link >Login</Nav.Link>
        </LinkContainer>
     
       
      
      </Nav>
      <Nav>
        <Nav.Link href="#deets"></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
         See the products!!
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>


  );
};

export default Header;