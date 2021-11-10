import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/logo.png'
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container className='d-flex align-items-center'>
                <Navbar.Brand>
                    <img src={logoImg} alt="" className={'img-fluid'} style={{ width: '150px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto header d-flex align-items-center" >
                        <Nav.Link as={Link} to='/home' style={{ color: '#314584' }}>HOME</Nav.Link>
                        <Nav.Link as={Link} to='/about' style={{ color: '#314584' }}>ABOUT</Nav.Link>
                        <Nav.Link as={Link} to='/shopDrones' style={{ color: '#314584' }}>SHOP DRONES</Nav.Link>
                        <Nav.Link as={Link} to='/dashboard' style={{ color: '#314584' }}>DASHBOARD</Nav.Link>
                        <Nav.Link as={HashLink} to='/home#gallery' style={{ color: '#314584' }}>GALLERY</Nav.Link>
                        <Nav.Link as={Link} to='/contact' style={{ color: '#314584' }}>CONTACT</Nav.Link>
                        <Nav.Link as={Link} to='/login'>
                            <Button className='custom-btn'>LOGIN</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;