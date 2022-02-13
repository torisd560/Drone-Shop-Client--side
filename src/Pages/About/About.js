import React from 'react';
import './About.css'
import { Col, Row, Button } from 'react-bootstrap';
import AboutBanner from '../../images/About/singlebanner.jpg'
import camera from '../../images/About/camera.png'
import elementImg from '../../images/About/Element-Lens2.png'
import VideoImg from '../../images/About/4K-video.png'
import Team from './Team/Team';
import MobilePart from './MobilePart/MobilePart';

const About = () => {
    return (
        <div>
            <Row xs={1} sm={1} md={1} className = 'm-0'>
                <Col  className='page-banner text-white fw-bold px-5' >
                    <div className='text-center py-5'>
                        <h1 >About Us</h1>
                        <p className='text-white'><i className="fas fa-map-marker-alt me-2"></i>Home / About</p>
                    </div>
                </Col>
                <Col  className='mb-5 text-center' style={{ marginTop: '150px' }}>
                    <div>
                        <h1 className='custom-text-dark fw-bold my-5' style={{ fontSize: '50px' }}>INTRODUCTION</h1>
                        <img src={AboutBanner} alt="" className='img-fluid' />
                    </div>
                </Col>
                <Col  className=' text-center'>
                    <div className='p-5 mt-2 mb-5'>
                        <h1 className='fw-bold custom-text-dark'>CINEMATIC MADE AUTOMATIC</h1>
                        <p className='px-5 py-3 lh-lg' >And you know where you were then. Girls were girls and men were men. Mister we could use a man like Herbert Hoover again. So get a witch's shawl on a broomstick you can crawl on. Were gonna pay a call on the Addams Family.
                            Goodbye gray sky there's nothing can hold me when I hold you. Feels so right it cant be wrong.
                        </p>
                        <Button variant='outline-dark' className=' fw-bold border-3 boder-dark px-4 py-2 rounded-0'>CONTACT US</Button>
                    </div>
                </Col>
                <Col  className='yello-bg ' style={{ padding: '100px' }}>
                    <Row  xs={12} sm={12} md={2}>
                        <Col style={{ marginTop: '-160px' }}>
                            <img src={camera} alt="" className='img-fluid' />
                        </Col>
                        <Col>
                            <Row xs={12} sm={12} md={12} style={{ marginTop: '150px' }}>
                                <Col >
                                    <h1 className='fw-bold custom -text-dark' > CAMERA</h1>
                                    <p className='lh-lg mt-3'>Rockin' and rollin' all week long. Movin' on up to the east side. We finally got a piece of the pie. Sunny Days sweepin' the clouds away. On my way to where the air is sweet. Can you tell me how to get how to get to Sesame Street. Happy Days are yours and mine.</p>
                                </Col>
                                <Row xs={12} sm={12} md={2} className='mt-4'>
                                    <Col >
                                        <img src={elementImg} alt="" className='img-fluid' />
                                    </Col>
                                    <Col>
                                        <img src={VideoImg} alt="" className='img-fluid' />
                                    </Col>
                                </Row>

                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Team></Team>
                <MobilePart></MobilePart>
            </Row>
        </div>
    );
};

export default About;