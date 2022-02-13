import React from 'react';
import useAuth from '../../../hooks/useAuth';
import welcomeImg from '../../../images/Welcome-rafiki.png'

const DashboardWelcome = () => {

    const { user } = useAuth();

    return (
        <div className='row m-0 justify-content-center '>
            <div className='col-md-4'>
                <img src={user.photoURL} alt="" className=" rounded-pill img-fluid" />
                <h2>Hello !!<span className='custom-text-pink fs-2'>{user.displayName}</span></h2>
            </div>
            <div className="col-md-8">
                <img src={welcomeImg} alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default DashboardWelcome;