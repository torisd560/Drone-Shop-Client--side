import React from 'react';
import { Container, Table, Button, Badge } from 'react-bootstrap';

const MyOrders = () => {
    return (
        <Container className='my-5'>
            <h1 className='custom-text-primary fw-bold'>Manage My Orders</h1>
            <h4>User Name</h4>
            <h5>Email</h5>
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
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <Button variant="danger" className='bg-danger'>Cancel</Button>
                        </td>
                        <td className="d-flex align-items-center justify-content-center"><Badge bg="warning" className='custom-text-primary' style={{ padding: '12px' }}>Pending</Badge><i className="fas fa-check-circle ms-2 custom-text-primary fs-4"></i></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrders;