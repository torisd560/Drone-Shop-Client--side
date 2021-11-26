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
        <div style={{ marginTop: '150px', marginBottom: '150px' }}>
            {alert && <Alert variant="success" className="my-5 w-50 mx-auto">
                <i className="fas fa-check-circle ms-2 text-success fs-4"></i> Review added successfully
            </Alert>}
            <h1 className='custom-text-dark fw-bold my-5'>Add Your Feddback Here</h1>

            <div className='page-banner w-75 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='input-field p-5'>
                    <input
                        type="text"
                        {...register("name")}
                        defaultValue={user.displayName}
                        className='w-75'
                    />
                    <input
                        type="email"
                        {...register("email")}
                        defaultValue={user.email}
                        className='w-75'
                    />
                    <input
                        type="text"
                        {...register("reviews")}
                        placeholder='Feedback'
                        className='w-75'
                    />

                    <input
                        type="number"
                        {...register("ratings", { min: 1, max: 5 })}
                        placeholder='Ratings'
                        className='w-75'
                    />

                    <Button type="submit" className='custom-btn  mt-3'><i className="far fa-paper-plane me-2"></i>Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;