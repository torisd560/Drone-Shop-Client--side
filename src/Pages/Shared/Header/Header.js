import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/logo.png'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, handleLogout } = useAuth()

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container>
                <Navbar.Brand>
                    <img src={logoImg} alt="" className={'img-fluid'} style={{ width: '200px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto header" >
                        <Nav.Link as={Link} to='/home' className='text-black'>HOME</Nav.Link>
                        <Nav.Link as={Link} to='/about' className='text-black' >ABOUT</Nav.Link>
                        <Nav.Link as={Link} to='/shopDrones' className='text-black' >SHOP DRONES</Nav.Link>
                        <Nav.Link as={HashLink} to='/home#gallery' className='text-black'>GALLERY</Nav.Link>
                        <Nav.Link as={Link} to='/contact' className='text-black'>CONTACT</Nav.Link>
                        {user.email && <Nav.Link as={Link} to='/dashboard' className='dashboard rounded-pill  text-white px-4' >DASHBOARD</Nav.Link>}
                        {user.email &&
                            <div className=' d-flex justify-content-between align-items-center'>
                                <img src={user.photoURL} alt="" className=' img-fluid' style={{ width: '40px', borderRadius: '50%' }} />
                                <span className='fw-bold custom-text-primary ms-2'>{user.displayName}</span>
                            </div>}
                        {user.email ? <span onClick={handleLogout} className=' custom-cursor border-0 '><i className="fas fa-sign-out-alt custom-text-pink me-2 "></i>LogOut</span>
                            :
                            <Nav.Link as={Link} to='/login' className='border-0'><i className="fas fa-sign-in-alt custom-text-pink me-2  "></i>LOGIN</Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;