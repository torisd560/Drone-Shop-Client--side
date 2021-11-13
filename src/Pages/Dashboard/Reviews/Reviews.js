import React from 'react';
import { useForm } from "react-hook-form";
import { Alert, Button } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user, alert, setAlert } = useAuth()
    const onSubmit = data => {

        fetch(`https://fast-plateau-38541.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(review => {
                if (review.insertedId) {
                    setAlert(true)
                }
            })

        reset()
    };
    return (
        <div className='my-5'>
             {alert && <Alert variant="success" className="my-5 w-50 mx-auto">
                <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Review added successfully
            </Alert>}
            <h1 className='custom-text-primary fw-bold my-5'>Add Your Feddback Here</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='input-field'>
                <input
                    type="text"
                    {...register("name")}
                    defaultValue={user.displayName}
                />
                <input
                    type="email"
                    {...register("email")}
                    defaultValue={user.email}
                />
                <input
                    type="text"
                    {...register("reviews")}
                    placeholder='Feedback' />
                <input
                    type="number"
                    {...register("ratings")}
                    placeholder='Ratings'
                />
                <Button type="submit" className='custom-btn  mt-3'>Submit</Button>
            </form>
        </div>
    );
};

export default Reviews;