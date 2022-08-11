import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import { Link } from 'react-router-dom';


const settings = {

  autoplaySpeed: 1500,
  arrows: null,
  dots: false,
  autoplay: true,
  loop: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  

};


const Banner = () => {
  return (
    <div className=" font-poppins-font mb-72 md:mb-36 lg:mb-36 ">
      <Slider className="relative" {...settings} >
        <div className="slide-one  bg-slate-900 " >
          <div className="container mx-auto ">
            <div className="mt-8 ml-8 md:ml-0 lg:ml-0 lg:mt-20 md:mt-18" data-aos="fade-up" data-aos-duration="2000">
              <h4 className="text-xs font-bold tracking-widest">WELCOME TO LIFECARE</h4>
              <h2 className="font-bold text-blue-900 text-4xl md:text-6xl lg:text-8xl md:mr-40 lg:mr-96 my-4 md:my-4 lg:my-4">Most Trusted Health Partner for Life</h2>
              <h4 className="text-base text-blue-900">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h4>
              <Link to="/makAppointment"><button className=" bg-sky-500 text-white text-sm md:mt-6 lg:mt-6  hover:bg-sky-400 font-poppins-font block  my-4   hover:cursor-pointer py-3 px-3">Doctors Booking</button></Link>
           </div>
          </div>
        </div>

        <div className=" slide-two">
         <div className="container mx-auto ">
            <div className="mt-8 ml-8 md:ml-0 lg:ml-0 lg:mt-20 md:mt-18">
              <h4 className="text-xs font-bold tracking-widest">WELCOME TO MEDIFIC</h4>
              <h2 className="font-bold text-blue-900 text-4xl md:text-6xl lg:text-8xl md:mr-40 lg:mr-96 my-4 md:my-4 lg:my-4">Most Trusted Health Partner for Life</h2>
              <h4 className="text-base text-blue-900">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h4>
              <Link to="/makAppointment"><button className=" bg-sky-500 text-white text-sm md:mt-6 lg:mt-6  hover:bg-sky-400 font-poppins-font block  my-4   hover:cursor-pointer py-3 px-3">Doctors Booking</button></Link>
           </div>
          </div>
        </div>

        <div className="  slide-three">
          <div className=" container mx-auto ">
            <div className="mt-8 ml-8 md:ml-0 lg:ml-0 lg:mt-20 md:mt-18">
              <h4 className="text-xs font-bold tracking-widest">WELCOME TO MEDIFIC</h4>
              <h2 className="font-bold text-blue-900 text-4xl md:text-6xl lg:text-8xl md:mr-40 lg:mr-96 my-4 md:my-4 lg:my-4">Most Trusted Health Partner for Life</h2>
              <h4 className="text-base text-blue-900">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h4>
              <Link to="/makAppointment"><button className=" bg-sky-500 text-white text-sm md:mt-6 lg:mt-6  hover:bg-sky-400 font-poppins-font block  my-4   hover:cursor-pointer py-3 px-3">Doctors Booking</button></Link>
           </div>
          </div>
        </div>
      </Slider>

      <div className="flex justify-center md:justify-end lg:justify-end container mx-auto absolute cartIndex" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="grid md:flex lg:flex gap-6">
          <div className="  bg-sky-500 inline-block py-6 px-8 md:py-10 lg:py-10 md:px-12 lg:px-10 text-white rounded" >
            <h3 className=" text-2xl">Emergency Case</h3>
            <div className="flex  items-center gap-4 my-2">
              <img style={{ width: "30px" }} src="https://i.ibb.co/Wfhzcth/phone-call.png" alt="" />
              <h5 className=" text-3xl">+234-567890</h5>
            </div>
            <h3 className="">Say something about our services</h3>
          </div>
          <div className=" bg-blue-900 inline-block py-6 px-8 md:py-10 lg:py-10 md:px-12 lg:px-10 text-white rounded">
            <div>
              <h3 className="text-2xl 	">Opening Hours</h3>
              <div className=" justify-between items-center mt-6">
                <div className="flex justify-between items-center border-b-[2px] border-solid  border-white ">
                  <ul >Mon-Fri</ul>
                  <ul>08.00 -18.00</ul>
                </div>
                <div className="flex justify-between items-center border-b-[2px] border-solid  border-white">
                  <ul>Sat-Sun</ul>
                  <ul>09.00 -15.00</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;