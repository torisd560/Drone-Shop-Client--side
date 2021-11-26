import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/logo.png'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, handleLogout } = useAuth()

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container className='d-flex align-items-center'>
                <Navbar.Brand>
                    <img src={logoImg} alt="" className={'img-fluid'} style={{ width: '200px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto header d-flex align-items-center" >
                        <Nav.Link as={Link} to='/home' className = 'text-black'>HOME</Nav.Link>
                        <Nav.Link as={Link} to='/about' className = 'text-black' >ABOUT</Nav.Link>
                        <Nav.Link as={Link} to='/shopDrones' className = 'text-black' >SHOP DRONES</Nav.Link>
                        {user.email && <Nav.Link as={Link} to='/dashboard'className = 'text-black' >DASHBOARD</Nav.Link>}
                        <Nav.Link as={HashLink} to='/home#gallery' className = 'text-black'>GALLERY</Nav.Link>
                        <Nav.Link as={Link} to='/contact' className = 'text-black'>CONTACT</Nav.Link>
                        {user?.email ? <>
                            <span className='text-dark fw-bold me-3' style={{ marginLeft: '25px' }}><i className="fas fa-user me-2"></i>{user.displayName}</span>
                            <Button onClick={handleLogout} className='custom-btn'><i className="fas fa-sign-out-alt me-2"></i>LogOut</Button>

                        </>
                            :
                            <Nav.Link as={Link} to='/login'>
                                <Button className='custom-btn'><i className="fas fa-sign-in-alt me-2"></i>LOGIN</Button>
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;