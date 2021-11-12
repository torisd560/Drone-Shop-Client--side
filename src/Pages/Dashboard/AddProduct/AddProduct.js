import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import {Button }from 'react-bootstrap'

const AddProduct = () => {
    const { register, handleSubmit , reset } = useForm();
    const onSubmit = data => {
       fetch('http://localhost:5000/moreProducts', {
           method : 'POST',
           headers : {
               'content-type' : 'application/json'
           },
           body : JSON.stringify(data)
       })
        reset()
    };
    return (
        <div>
            <h1 className = 'custom-text-primary fw-bold my-5'>Add a product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className = 'input-field'>
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