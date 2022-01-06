import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, price, _id } = props.product
    return (
        <Col>
            <Card.Img variant="top" src={img} className=' img-fluid mx-auto' />
            <Card.Title className='mt-4'> {name} </Card.Title>
            <Card.Body>
                <div className=' d-flex justify-content-between align-items-center'>
                    <Link to={`/moreProducts/placeOrder/${_id}`}>
                        <Button variant="" className='custom-btn'><i className="fas fa-shopping-cart me-2"></i>ORDER NOW</Button>
                    </Link>
                    <h6 className='custom-text-primary'> ${price}.00</h6>
                </div>
            </Card.Body>
        </Col>


    );
};

export default Product;
