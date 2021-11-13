import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import { Alert, Button } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { alert, setAlert } = useAuth()
    const onSubmit = data => {
        fetch('https://fast-plateau-38541.herokuapp.com/moreProducts', {
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
    };
    return (
        <div>
            <h1 className='custom-text-primary fw-bold my-5'>Add a product</h1>
            {alert && <Alert variant="success" className="my-5 w-50 mx-auto">
                <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Product added successfully
            </Alert>}
            <form onSubmit={handleSubmit(onSubmit)} className='input-field w-50 mx-auto'>
                <input {...register("name")} placeholder='Product Name' />
                <input  {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder='Price' />
                <input type="url" {...register("img")} placeholder='Image-Url' />
                <Button className='custom-btn  mt-3' type="submit">Add Product</Button>
            </form>
        </div>
    );
};

export default AddProduct;