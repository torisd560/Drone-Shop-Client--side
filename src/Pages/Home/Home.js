import React from 'react';
import Gallery from '../Gallery/Gallery';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
import HomeReviews from './HomeReviews/HomeReviews';
import Header from '../Shared/Header/Header'




const Home = () => {
    return (
        <div className='text-center overflow-hidden'>
            <Header></Header>
            <TopBanner></TopBanner>
            <Products></Products>
            <HomeReviews></HomeReviews>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;