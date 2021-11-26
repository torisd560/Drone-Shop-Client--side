import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';



const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fast-plateau-38541.herokuapp.com/moreProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    //======================= remove product function ======================
    const handleRemove = id => {
        const proceed = window.confirm('Are your sure ? you want to remove this Product')
        if (proceed) {
            fetch(`https://fast-plateau-38541.herokuapp.com/moreProducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Product Removed Succesfully')
                        const restProducts = products.filter(product => product._id !== id)
                        setProducts(restProducts)
                    }
                })
        }
    }

    return (
        <Container className='my-5'>
            <h1 className='custom-text-dark fw-bold'>Manage All Products</h1>
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
                    {
                        products.map((product, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{product?.name}</td>
                            <td>$ {product.price}</td>
                            <td>
                                <img src={product.img} alt="" className="img-fluid" style={{ width: '100px', height: '60px', background: 'lightgray', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)' }} />
                            </td>
                            <td>
                                <i onClick={() => handleRemove(product._id)} className="fas fa-trash-alt text-danger fs-5 custom-cursor"></i>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageProducts;