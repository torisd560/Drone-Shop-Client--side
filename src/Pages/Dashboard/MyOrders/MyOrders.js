import React, { useEffect, useState } from 'react';
import { Container, Table, Badge, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user, isLoading } = useAuth()

    useEffect(() => {
        fetch(`https://fast-plateau-38541.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    if (isLoading) {
        return <div className='m-5 text-center'><Spinner animation="border" variant="warning" /></div>
    }

    //==============delete functon=====================
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this order?')
        if (proceed) {
            fetch(`https://fast-plateau-38541.herokuapp.com/orders/${id}`, {
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
        <div>
            <Container className='p-5'>
                <h1 className='fw-bold custom-text-pink'>My Orders</h1>
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
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order?.userName}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.productName}</td>
                                    <td>
                                        <i onClick={() => handleDelete(order._id)} className="fas fa-trash-alt text-danger fs-5 custom-cursor"></i>
                                    </td>
                                    <td>{order.status === 'Shipped' ? <Badge bg="success" className='text-white  py-2 px-3'>{order.status}</Badge>
                                        :
                                        <Badge bg="warning" className='text-dark py-2 px-3'>{order.status}</Badge>
                                    }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrders;