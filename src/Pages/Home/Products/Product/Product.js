import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, price, description } = props.product
    return (
        <Col>
            <Card className='shadow-lg p-5'>
                <Card.Img variant="top" src={img} className='img-fluid' style={{ width: '400px', height: '200px' }} />
                <Card.Body>
                    <Card.Title className='custom-text-primary fw-bold'>{name}</Card.Title>
                    <h4 className='custom-text-pink'>$ {price}</h4>
                    <Card.Text className='lh-lg'>
                        {description.slice(0, 100)}.
                    </Card.Text>
                    <Link to='/placeOrder'>
                        <Button className='custom-btn'>ORDER NOW</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Product;