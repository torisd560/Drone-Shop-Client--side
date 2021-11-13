import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review/Review';

const HomeReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://fast-plateau-38541.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (

        <div className='my-5' >
            <h1 className='custom-text-primary fw-bold text-uppercase'style = {{marginTop :'120px'}} >Excellent Customer Reviews</h1>
            <Row xs={12} md={3} className="g-3  review-bg p-5 " style = {{marginTop :'120px', marginBottom: '120px'}}>

                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }

            </Row>
        </div>

    );
};

export default HomeReviews;