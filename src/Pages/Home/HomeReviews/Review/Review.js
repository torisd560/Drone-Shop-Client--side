import React from 'react';
import { Card, Col } from 'react-bootstrap';
import reviewImg from '../../../../images/review.jpg'
import './Review.css'

const Review = (props) => {
    const { name, email, reviews, ratings } = props.review
    return (

        <Col>
            <Card>
                <div className = 'mx-auto mt-5'>
                <Card.Img variant="top" src={reviewImg} className = 'img-fluid' style = {{ width: '100px'}}/>
                </div>
                <Card.Body>
                    <Card.Title className = 'custom-text-primary fw-bold'>{name}</Card.Title>
                    <h6>{email}</h6>
                    <p>
                                    {parseInt(ratings) === 5 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(ratings) === 4 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(ratings) === 3 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(ratings) === 2 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(ratings) === 1 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>

                                        </div>
                                    }
                                </p>
                    <Card.Text>
                       {reviews}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Review;