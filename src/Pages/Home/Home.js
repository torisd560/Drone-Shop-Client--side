import React from 'react';
import Gallery from '../Gallery/Gallery';
import TopBanner from './TopBanner/TopBanner';




const Home = () => {
    return (
        <div className = 'text-center'>
            <TopBanner></TopBanner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;