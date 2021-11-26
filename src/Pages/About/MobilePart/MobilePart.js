import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import phoneImg from '../../../images/About/phone.jpg'
const MobilePart = () => {
    return (
        <div className='mb-5 text-center' style= {{marginTop :'100px'}}>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <div>
                            <h1 className='fw-bold custom-text-dark'>LIVE HD VIDEO FROM DRONE TO MOBILE</h1>
                            <p className='px-5 py-3 lh-lg'>Today still wanted by the government they survive as soldiers of fortune. Said Californ'y is the place you ought to be So they loaded up the truck and moved to Beverly. Hills that is. Swimmin' pools movie stars. They were four men living all together yet they were all alone. Believe it or not I'm walking on air. I never thought I could feel so free.</p>
                            <Button variant='outline-dark' className=' fw-bold border-3 boder-dark px-4 py-2 rounded-0'>MORE ABOUT DOWNLOAD APP</Button>
                            <Button variant='outline-dark' className=' fw-bold border-3 boder-dark px-4 py-2 rounded-0 ms-4' >DOWNLOAD APP</Button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} className = 'my-5'>
                        <img src={phoneImg} alt="" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MobilePart;