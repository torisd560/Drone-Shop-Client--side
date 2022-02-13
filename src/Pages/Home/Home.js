import React from 'react';
import Gallery from '../Gallery/Gallery';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
import HomeReviews from './HomeReviews/HomeReviews';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer';




const Home = () => {
    return (
        <div className='text-center'>
            <Header></Header>
            <TopBanner></TopBanner>
            <Products></Products>
            <HomeReviews></HomeReviews>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;