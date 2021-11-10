import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import topBanner from '../../../images/topBanner.png'

const TopBanner = () => {
    return (
        <Container className='mb-5' style={{ marginTop: '140px' }}>
            <Row>
                <Col xs={12} sm={12} md={6} className='text-start'>
                    <h1 className='custom-text-primary fw-bold' style={{ fontSize: '65px' }}>The Most
                        <br /> Interesting Drone
                        <br /> In The World.</h1>
                    <p className='lh-lg my-4' style={{ fontSize: '20px' }}>For a start, these prolific manufacturers have fitted the Phantom 4 with DroCam Go, a fully-automated system that makes this drone a comprehensive tool.</p>
                    <Link to='/moreProducts'>
                        <Button className='custom-btn py-3'>Explore More</Button>
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <img src={topBanner} alt="" style={{ width: '700px' }} />
                </Col>
            </Row>
        </Container>
    )
};

export default TopBanner;