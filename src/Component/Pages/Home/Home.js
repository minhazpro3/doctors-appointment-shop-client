import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import HomeCounter from '../HomeCounter/HomeCounter'
import Banner from '../../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <HomeCounter/>
        </div>
    );
};

export default Home;