import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Badge, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user, isLoading } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // if(isLoading){
    //     return  <div className = 'm-5 text-center'><Spinner animation="border" variant="warning" /></div>
    // }

    //==============delete functon=====================
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this order?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Delete orders succesfully')
                        const restOrders = orders.filter(order => order._id !== id)
                        setOrders(restOrders)
                    }
                })
        }

    }

    return (
        <Container className='my-5'>
            <h1 className='custom-text-primary fw-bold'>My Orders</h1>
                <Table responsive="sm" className=' my-5'>
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Products</th>
                            <th>Cancel Order</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order?.userName}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.productName}</td>
                                    <td>
                                        <Button onClick={() => handleDelete(order._id)} variant="danger" className='bg-danger'>Cancel</Button>
                                    </td>
                                    <td className="d-flex align-items-center justify-content-center"><Badge bg="warning" className='custom-text-primary' style={{ padding: '12px' }}>{order.status}</Badge></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
        </Container>
    );
};

export default MyOrders;