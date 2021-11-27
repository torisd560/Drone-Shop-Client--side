import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, price, _id } = props.product
    return (
        <Col>
            <Card className='p-5 shadow-sm border-0 rounded-1' >
                <Card.Img variant="top" src={img} className='img-fluid' style={{ width: '500px', height: '250px', }} />
                <Card.Body>
                    <Card.Title className=' fw-bold'>{name}</Card.Title>
                    <p className='custom-text-pink fs-5'>$ {price}.00</p>
                    <Link to={`/moreProducts/placeOrder/${_id}`}>
                        <Button className='custom-btn'><i className="fas fa-shopping-cart me-2"></i>ORDER NOW</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Product;