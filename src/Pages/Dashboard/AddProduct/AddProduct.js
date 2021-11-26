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
            <h1 className='custom-text-dark fw-bold my-5'>Add a product</h1>
            {alert && <Alert variant="success" className="my-5 w-50 mx-auto">
                <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Product added successfully
            </Alert>}
            <div  className='page-banner w-75 mx-auto'> 
                <form onSubmit={handleSubmit(onSubmit)} className='input-field p-5'>
                    <input
                        {...register("name")}
                        placeholder='Product Name'
                        className='w-75'
                    />
                    <input
                        {...register("description")}
                        placeholder="Description"
                        className='w-75'
                    />
                    <input
                        type="number"
                        {...register("price")}
                        placeholder='Price'
                        className='w-75'
                    />
                    <input
                        type="url" {...register("img")}
                        placeholder='Image-Url'
                        className='w-75'
                    />
                    <Button className='custom-btn  mt-3' type="submit">Add Product</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;