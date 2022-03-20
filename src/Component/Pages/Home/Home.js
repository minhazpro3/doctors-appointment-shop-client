import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import HomeCounter from '../HomeCounter/HomeCounter'
import Banner from '../../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';
import DoctorsHome from '../DoctorsHome/DoctorsHome';
import Footer from '../Footer/Footer';
import LocationMap from '../LocationMap/LocationMap';
import Pakages from '../Pakages/Pakages';

const Home = () => {
    return (
        <div>
           
            <Banner/>
            <About/>
            <Services/>
            <HomeCounter/>
            <Pakages/>
            <Testimonial/>
            <DoctorsHome/>
            <LocationMap/>
            <Footer/>
         
        </div>
    );
};

export default Home;