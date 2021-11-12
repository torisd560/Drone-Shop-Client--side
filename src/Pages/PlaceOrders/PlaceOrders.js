import React, { useEffect, useState } from 'react';
import './placeOrder.css'
import { Card, Col, Container, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth'

const PlaceOrders = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { user, isLoading, alert ,setAlert} = useAuth()
    //============react hook form function for order box===================
    const { register, handleSubmit ,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlert(true)
                   
                }
            })
            reset()
        
    }

    useEffect(() => {
        fetch(`http://localhost:5000/moreProducts/placeOrder/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])

    if (isLoading) {
        return <div className='m-5 text-center'><Spinner animation="border" variant="warning" /></div>
    }

    return (
        <Container className='my-5'>
           { alert && <Alert variant="success" className = "my-5">
           <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Placed order successfully
            </Alert>}
            <Row>
                <Col sm={12} md={7}>
                    <Card className='p-5 shadow-sm' >
                        <Card.Img variant="top" src={product.img} className='img-fluid' />
                        <Card.Body>
                            <Card.Title className='custom-text-primary fw-bold'>{product.name}</Card.Title>
                            <h4 className='custom-text-pink'>$ {product.price}</h4>
                            <Card.Text className='lh-lg'>
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col Col sm={12} md={5} className='shadow-lg p-3'>
                    <form onSubmit={handleSubmit(onSubmit)} className='order-field'>
                        <input
                            className='custom-text-primary fs-5 fw-bold'
                            defaultValue={product?.name}
                            {...register("productName")}
                        />
                        <input
                            className='fs-5'
                            defaultValue={product?.price}

                            {...register("price")}
                        />
                        <input
                            defaultValue={user?.displayName}
                            {...register("userName")}

                        />
                        <input defaultValue={user?.email}
                            {...register("email")}

                        />
                        <input type="tel" {...register("phone")}
                            placeholder="Phone Number"
                        />
                        <input
                            type="text" {...register("address")}
                            placeholder="Address" 
                        />
                        <input
                            type="text" {...register("status")}
                            defaultValue = "Pending"
                        />
                        <Button type="submit" className='custom-btn  mt-4'>Place Order</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrders;