import React from 'react';
import NotFoundImg from '../../images/404.jpg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div >
            <img src={NotFoundImg} alt="" className='mt-5' />
            <h3 className='text-secondary'> Opps !! Sorry Page Not Found</h3>
            <Link to='/home'>
                <Button className='btn btn-danger mt-3'>Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;