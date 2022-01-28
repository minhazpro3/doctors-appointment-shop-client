import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import HomeCounter from '../HomeCounter/HomeCounter'

const Home = () => {
    return (
        <div>
            <About/>
            <Services/>
            <HomeCounter/>
        </div>
    );
};

export default Home;