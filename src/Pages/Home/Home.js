import React from 'react';
import Gallery from '../Gallery/Gallery';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';




const Home = () => {
    return (
        <div className='text-center'>
            <TopBanner></TopBanner>
            <Products></Products>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;