import React from 'react';
import { Container, Table, Button, } from 'react-bootstrap';
import topBanner from '../../../images/topBanner.png'


const ManageProducts = () => {

    return (
        <Container className='my-5'>
            <h1 className='custom-text-primary fw-bold'>Manage All Products</h1>
            <Table responsive="sm" className=' my-5'>
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Remove Product</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <img src={topBanner} alt="" className="img-fluid" style={{ width: '100px', background: 'lightgray', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)' }} />
                        </td>
                        <td>
                            <Button variant="danger" className='bg-danger'>Remove</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageProducts;