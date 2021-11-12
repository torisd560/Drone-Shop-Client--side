import React from 'react';
import Gallery from '../Gallery/Gallery';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
import Header from '../../Pages/Shared/Header/Header'




const Home = () => {
    return (
        <div className='text-center'>
            {/* <Header></Header> */}
            <TopBanner></TopBanner>
            <Products></Products>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;