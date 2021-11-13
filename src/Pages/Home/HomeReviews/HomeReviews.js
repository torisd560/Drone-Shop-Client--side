import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review/Review';

const HomeReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://fast-plateau-38541.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (

        <Container className = 'my-5'>
            <h1 className='custom-text-primary fw-bold my-5 text-uppercase'>Excellent Customer Reviews</h1>
            <Row xs={12} md={3} className="g-4">
                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }
            </Row>
        </Container>

    );
};

export default HomeReviews;