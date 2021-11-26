import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-white mt-5 footer'>
                <Row className = 'p-5' style={{ backgroundColor: '#202020' }}>
                    <Col sm={12} md={3}>
                        <h4 className='mb-5'>CONTACT US</h4>
                        <h5 className='mb-4'>Adress</h5>
                        <p>17 Downtown Dhaka Bangladesh</p>
                        <h5 className='my-4'>Email</h5>
                        <p>Info@Drone.Com
                            <br />   Support@Drone.Com</p>
                        <h5 className='my-4'>Call Us</h5>
                        <p>+(10) 123 456 7896
                            <br />   +(10) 123 456 7899</p>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 className='mb-5'>LATEST NEWS</h4>
                        <p>Become an Affiliate</p>
                        <p>About Drone</p>
                        <p>Community Meetups</p>
                        <p>Why Buy With Us?</p>
                        <p>Our Great Team</p>
                        <p>Our Reviews</p>

                    </Col>
                    <Col sm={12} md={3}>
                        <h5 className='mb-5'>OUR SERVICES</h5>
                        <p>About Us</p>
                        <p>Brands</p>
                        <p>Gift vouchers</p>
                        <p>Testimonials</p>
                        <p>Our Team</p>
                        <p>Drone Support</p>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 className='mb-5'>GET IN TOUCH</h4>
                        <div >
                            <input className='form-control border-1 border-light rounded-0 my-3 p-3' type="text" placeholder='Name' style={{ backgroundColor: 'transparent' }} />
                            <input className='form-control border-1 border-light rounded-0 my-3 p-3' type="email" placeholder='Email' style={{ backgroundColor: 'transparent' }} />
                            <textarea className='form-control  border-1 border-light rounded-0 my-3 p-3' type="text" placeholder='Message' style={{ backgroundColor: 'transparent' }} />
                            <button className=' px-5 border-1 border-light rounded-0 my-3 p-3' type="submit" style={{ backgroundColor: 'transparent', color: 'white' }} ><i className="far fa-paper-plane me-3"></i>SUBMIT</button>
                        </div>
                    </Col>
                </Row>

                <Row className='px-5 py-3 text-white' style = {{backgroundColor:'rgb(22, 21, 21)'}}>
                    <Col sm={12} md={6}>
                        <p className = 'text-white' style = {{fontSize :'14px'}}>© 2021 ALL RIGHTS BY RESERVED DRONE STORE</p>
                    </Col>
                    <Col sm={12} md={6} className = 'd-flex justify-content-around'  style = {{fontSize :'14px'}}>
                        <Link to = '/home'><p className = 'text-white'>HOME</p></Link>
                        <Link to ='/about'><p className = 'text-white'>ABOUT</p></Link>
                        <Link to ='/moreProducts'> <p className = 'text-white'>SERVICES</p></Link>
                        <Link to ='/'> <p className = 'text-white'>TERMS</p></Link>  
                    </Col>
                </Row>
        </div >
    );
};

export default Footer;