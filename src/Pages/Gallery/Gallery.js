import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Work1 from '../../images/gallery/work-1.jpg'
import Work2 from '../../images/gallery/work-2.jpg'
import Work3 from '../../images/gallery/work-3.jpg'
import Work4 from '../../images/gallery/work-4.jpg'
import Work5 from '../../images/gallery/work-5.jpg'
import Work6 from '../../images/gallery/work-6.jpg'
import Work7 from '../../images/gallery/work-7.jpg'
import Work8 from '../../images/gallery/work-8.jpg'

const Gallery = () => {
    return (
        <div className='m-0'  id='gallery'>
            <p className='custom-text-pink fw-bold'>PHOTO GALLERY</p>
            <h1 className='custom-text-dark fw-bold mb-5'>LAST DRONE GALLERY</h1>
            <Row xs={12} sm={12} md={4} className='m-0 p-0 '>
                <Col className='m-0 p-0'>
                    <img src={Work1} alt="" className='img-fluid' />
                </Col>
                <Col className='m-0 p-0'>
                    <img src={Work2} alt="" className='img-fluid' />
                </Col>
                <Col className='m-0 p-0'>
                    <img src={Work3} alt="" className='img-fluid ' />
                </Col>
                <Col className='m-0 p-0'>
                    <img src={Work4} alt="" className='img-fluid' />
                </Col>
                <Col className='m-0 p-0'>
                    <img src={Work5} alt="" className='img-fluid' />
                </Col>
                <Col className='m-0 p-0'>
                    <img src={Work6} alt="" className='img-fluid' />
                </Col>
                <Col className='m-0 p-0'>
                    <img src={Work7} alt="" className='img-fluid ' />
                </Col>
                <Col className='m-0 p-0'>
                    <img src={Work8} alt="" className='img-fluid ' />
                </Col>
            </Row>
        </div>
    );
};

export default Gallery;