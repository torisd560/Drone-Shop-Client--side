import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Product from '../Home/Products/Product/Product';

const MoreProducts = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch(`https://fast-plateau-38541.herokuapp.com/moreProducts`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='text-center'>
            <Col className='page-top-banner text-white fw-bold px-5'>
               <div className = 'py-4'>
               <h1  className = 'text-uppercase text-white text-center p-5'>Products list</h1>
               </div>
            </Col>
            <h1 className='custom-text-primary fw-bold  lh-sm' style = {{marginTop : '150px'}}>Top RC Drones With a Camera
                <br />
                Updated With New Drone Models for 2021</h1>
            {isLoading ? <div className='m-5 text-center'><Spinner animation="border" variant="warning" /></div>
                :
                <>
                    <Container className='my-5'>
                        <Row xs={12} sm={12} md={3} className="g-3">
                            {
                                products.map(product => <Product product={product} key={product._id}></Product>)
                            }
                        </Row>
                    </Container>
                </>}
        </div>
    );
};

export default MoreProducts;