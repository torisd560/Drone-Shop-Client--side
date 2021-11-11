import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap'

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div>
            <h1 className='custom-text-primary fw-bold my-5'>Add Your Feddback Here</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='input-field'>
                <input type="text" {...register("name")} placeholder='Name' />
                <input type="email"  {...register("email")} placeholder="Email" />
                <input type="text" {...register("img")} placeholder='Feedback' />
                <input type="number" {...register("img")} placeholder='Ratings' />
                <Button className='custom-btn  mt-3' type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Reviews;