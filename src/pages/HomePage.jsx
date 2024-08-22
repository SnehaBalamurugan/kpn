// src/pages/HomePage.js
import React from 'react';
import CardGrid from '../components/CardGrid';
import BannerCarousel from '../components/BannerCarousel';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="container mt-2">
                <h6><b>Top Categories</b></h6>
                <div style={{ padding: '20px' }}>
                    <CardGrid type="top-categories"/>
                </div>
                <div>
                   <BannerCarousel/>
                </div>
                <h6 className='mt-2'><b>Fruits & Vegetables</b></h6>
                <div style={{ padding: '20px' }}>
                    <CardGrid type="fruits-and-veges"/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
