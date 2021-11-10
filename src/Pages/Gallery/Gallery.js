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
        <Container style = {{margin : '100px'}} id ='gallery'>
            <p className='custom-text-pink fw-bold'>PHOTO GALLERY</p>
            <h1 className='custom-text-primary fw-bold mb-5'>Check Out Some of Our
                <br /> Beautiful Moments.</h1>
            <Row className="g-4">
                <Col xs={12} sm={12} md={3}>
                    <img src={Work1} alt="" className='img-fluid rounded-3' />
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <img src={Work2} alt="" className='img-fluid rounded-3' />
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <img src={Work3} alt="" className='img-fluid rounded-3' />
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <img src={Work4} alt="" className='img-fluid rounded-3' />
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <img src={Work5} alt="" className='img-fluid rounded-3' />
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <img src={Work6} alt="" className='img-fluid rounded-3' />
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <img src={Work7} alt="" className='img-fluid rounded-3' />
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <img src={Work8} alt="" className='img-fluid rounded-3' />
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;