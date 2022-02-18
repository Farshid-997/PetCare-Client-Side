import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png'

import './Header.css'
import { NavLink } from 'react-router-dom';
//const { user, logOut } =useFirebase ()
const Header = () => {
  return (
<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='header'>
                {/* logo */}
                <NavLink to='/home'><Navbar.Brand className='logo' href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block me-2 align-top "
                        alt="React Bootstrap logo"
                    />Pet Care
                </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills" className="ms-auto">
                        {/* links */}
                        <NavLink to='/home'> <Nav.Link href="#home">Home</Nav.Link></NavLink>
                        <NavLink to='/aboutus'> <Nav.Link href="#about">About</Nav.Link></NavLink>
                        <NavLink to='/seedoctors'> <Nav.Link href="#services">Doctors</Nav.Link></NavLink>
                      
                        <NavLink to='/Register'> <Nav.Link href="#contact">Register</Nav.Link></NavLink>
                        {/* conditional rendering */}
                        {/* {(user.displayName || user.email) &&
                            <Navbar.Text>
                                Signed in as <a href="#login">{(user.displayName || user.email)}</a>
                            </Navbar.Text>
                        }
                        {user.email && <Nav.Link onClick={logOut}>Logout</Nav.Link>}
                        {!user.email &&
                            <NavLink to='/register'> <Nav.Link href="#register">Register</Nav.Link></NavLink>}
                        {!user.email &&
                            <NavLink to='/login'> <Nav.Link href="#login">Login</Nav.Link></NavLink>} */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
};

export default Header;