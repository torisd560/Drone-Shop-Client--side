import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch('https://fast-plateau-38541.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div style={{ marginTop: '100px' }} className='text-center'>
            <h1 className='custom-text-dark fw-bold my-5 lh-sm' >DRONE PRODUCTS</h1>
            {isLoading ? <div className='m-5 text-center'><Spinner animation="border" variant="warning" /></div>
                :
                <>
                    <Container className='my-5'>
                        <Row xs={12} sm={12} md={3} className="g-5">
                            {
                                products.map(product => <Product product={product} key={product._id}></Product>)
                            }
                        </Row>
                    </Container>
                </>}
        </div>
    );
};

export default Products;