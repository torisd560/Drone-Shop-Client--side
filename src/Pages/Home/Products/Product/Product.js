import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, price, _id } = props.product
    return (
        <Col>
            <div className='p-4  border-0 rounded-1 bg-light-gray' >
                <img src={img} className='img-fluid' alt="" />
                <div  className=' mt-3'>
                    <h5>{name}</h5>
                    <p className='custom-text-pink fw-bold fs-5'>$ {price}.00</p>
                    <Link to={`/moreProducts/placeOrder/${_id}`}>
                        <Button className='custom-btn'><i className="fas fa-shopping-cart me-2"></i>ORDER NOW</Button>
                    </Link>
                </div>
            </div>
        </Col>


    );
};

export default Product;