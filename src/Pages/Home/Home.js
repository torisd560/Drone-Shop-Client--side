import React from 'react';
import Gallery from '../Gallery/Gallery';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
import HomeReviews from './HomeReviews/HomeReviews';




const Home = () => {
    return (
        <div className='text-center'>
            {/* <Header></Header> */}
            <TopBanner></TopBanner>
            <Products></Products>
            <Gallery></Gallery>
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default Home;