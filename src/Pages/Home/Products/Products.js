import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div style={{marginTop : '100px'}}>
            <h1 className='custom-text-primary fw-bold my-5 lh-sm' >Top RC Drones With a Camera
                <br />
                Updated With New Drone Models for 2021</h1>
            <Container className='my-5'>
                <Row xs={12} sm={12} md={3} className="g-3">
                    {
                        products.map(product => <Product product={product} key={product.key}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;