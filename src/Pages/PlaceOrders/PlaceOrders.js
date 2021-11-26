import React, { useEffect, useState } from 'react';
import './placeOrder.css'
import { Card, Col, Container, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth'

const PlaceOrders = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { user, isLoading, alert, setAlert } = useAuth()

    const initailOrdrData = {
        userName: user.displayName,
        email: user.email,
        status: 'Pending',
        phone: '',
        address: ''

    }
    const [orderData, setOrderData] = useState(initailOrdrData)

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newOrderData = { ...orderData }
        newOrderData[field] = value
        setOrderData(orderData)
        console.log(orderData)
    }


    //============function for order box===================

    const handleSubmit = e => {

        const order = {
            ...orderData,
            productName: product.name,
            price: product.price
        }
        console.log(order)

        fetch(`https://fast-plateau-38541.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlert(true)

                }
            })
        e.preventDefault()

    }

    useEffect(() => {
        fetch(`https://fast-plateau-38541.herokuapp.com/moreProducts/placeOrder/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])

    if (isLoading) {
        return <div className='m-5 text-center'><Spinner animation="border" variant="warning" /></div>
    }

    return (
        <Container className='my-5'>
            {alert && <Alert variant="success" className="my-5 w-50 mx-auto">
                <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Placed order successfully
            </Alert>}
            <Row>
                <Col sm={12} md={7}>
                    <Card className='p-5 shadow-sm' >
                        <Card.Img variant="top" src={product.img} className='img-fluid' />
                        <Card.Body>
                            <Card.Title className='custom-text-dark fw-bold'>{product.name}</Card.Title>
                            <h4 className='custom-text-pink'>$ {product.price}</h4>
                            <Card.Text className='lh-lg'>
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col Col sm={12} md={5} className='shadow-lg p-3  page-banner'>
                    <h4 className = 'custom-text-pink text-center text-uppercase'>Confirm Order</h4>
                    <form onSubmit={handleSubmit} className='order-field mt-4'>
                        <input
                            onBlur={handleOnBlur}
                            className='custom-text-dark fs-5 fw-bold'
                            defaultValue={product.name}
                            name='productName'
                        />
                        <input
                            onBlur={handleOnBlur}
                            className='fs-5'
                            defaultValue={product.price}
                            name=' price'
                        />
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            name='userName'

                        />
                        <input
                            onBlur={handleOnBlur}
                            defaultValue={user?.email}
                            name='email'

                        />
                        <input
                            onBlur={handleOnBlur}
                            type="tel"
                            name='phone'
                            placeholder="Phone Number"
                        />
                        <input
                            onBlur={handleOnBlur}
                            type="text"
                            name='address'
                            placeholder="Address"
                        />
                        <input
                            onBlur={handleOnBlur}
                            type="text"
                            name='status'
                            defaultValue="Pending"
                        />
                        <Button type="submit" className='custom-btn  mt-4'><i class="fas fa-shopping-cart me-2"></i>Place Order</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrders;