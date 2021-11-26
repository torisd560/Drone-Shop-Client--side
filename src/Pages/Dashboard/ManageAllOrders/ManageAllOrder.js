import React, { useEffect, useState } from 'react';
import { Container, Table, Badge, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch('https://fast-plateau-38541.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

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

    //========================update function =================================
    const data = {
        status: 'Shipped'
    }
    const hanldeUpdate = id => {
        fetch(`https://fast-plateau-38541.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    return (
        <Container className='my-5'>
            <h1 className='custom-text-dark fw-bold'>Manage All Orders {orders.length}</h1>
            {isLoading && <div className='m-5 text-center'><Spinner animation="border" variant="warning" /></div>}
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
                        orders?.map((order, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{order?.userName}</td>
                            <td>{order?.email}</td>
                            <td>{order?.productName}</td>
                            <td>
                                <i onClick={() => handleDelete(order._id)} className="fas fa-trash-alt text-danger fs-5 custom-cursor"></i>
                            </td>
                            <td className="d-flex align-items-center justify-content-center">
                                {order.status === 'Shipped' ? <Badge bg="success" className='text-white  py-3 px-4'>{order.status}</Badge>
                                    :
                                    <>
                                        <Badge onClick={() => hanldeUpdate(order._id)} bg="warning" className=' text-dark py-2 px-3 custom-cursor' >{order.status}<i className="fas fa-check-circle m-1 fs-6 text-success"></i></Badge>
                                    </>}</td>


                        </tr>
                        )

                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageAllOrder;