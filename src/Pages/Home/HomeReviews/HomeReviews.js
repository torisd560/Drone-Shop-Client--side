import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const HomeReviews = () => {
const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('https://fast-plateau-38541.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1>This is home review</h1>
            {
                reviews.map(review => <Review review = {review} key = {review._id}></Review>)
            }
        </div>
    );
};

export default HomeReviews;