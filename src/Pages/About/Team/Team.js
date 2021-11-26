import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import team1 from '../../../images/About/team1.jpg'
import team2 from '../../../images/About/team2.jpg'
import team3 from '../../../images/About/team3.jpg'

const Team = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h1 className='custom-text-dark fw-bold my-5 icon-bg p-5 '>OUR GREAT TEAM</h1>
            </div>

            <Container>
                <Row className="g-4 text-center">

                    <Col xs={12} sm={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src={team1} />
                            <Card.Body style={{ background: '#fdff39' }}>
                                <Card.Title className='custom-text-dark fw-bold'>BEN AFFLECKS</Card.Title>
                                <Card.Text>
                                    FOUNDER / CEO
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src={team2} />
                            <Card.Body style={{ background: '#fdff39' }}>
                                <Card.Title className='custom-text-dark fw-bold'>TOM HANKS</Card.Title>
                                <Card.Text>
                                    FOUNDER
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src={team3} />
                            <Card.Body style={{ background: '#fdff39' }}>
                                <Card.Title className='custom-text-dark fw-bold'> JACK AFFLECKS</Card.Title>
                                <Card.Text>
                                    PILOT
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Team;