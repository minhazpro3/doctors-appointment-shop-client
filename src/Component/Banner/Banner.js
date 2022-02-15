import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'





const settings = {

  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  loop: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  width: 100
};



const Banner = () => {
  return (
    <div className=" font-poppins-font container-none">
      <Slider className="relative" {...settings} >
        <div className="relative " >

          <img style={{ width: "100%" }} src="https://i.ibb.co/8Yzkj8M/img4.webp" alt="" />
          <h4 className=" absolute  top-12  lg:top-48 font-bold  left-12  lg:left-24 tracking-widest">WELCOME TO MEDIFIC</h4>

          <h2 className="absolute top-16  lg:top-56 left-12  lg:left-24  lg:text-7xl text-4xl font-bold text-blue-900  md:mr-96 lg:mr-96	">Most Trusted Health    Partner for Life</h2>
          <h4 className="text-base absolute bottom-24 sm:bottom-64  lg:bottom-96 left-12  lg:left-24 text-blue-900">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h4>

          <button className="rounded- lg bg-sky-500 text-white text-sm py-3 px-3 hover:bg-sky-400 font-poppins-font block absolute left-12  sm:bottom-48 lg:left-24 bottom-12  lg:bottom-72  hover:duration-500 ease-in-out hover:mt-0 mt-4 hover:cursor-pointer">View All Service</button>



        </div>

        <div className=" relative">
          <img style={{ width: "100%" }} src="https://i.ibb.co/c3nh7N9/img3.webp" alt="" />
          <h4 className=" absolute  top-12  lg:top-48 font-bold  left-12  lg:left-24 tracking-widest">WELCOME TO MEDIFIC</h4>
          <h2 className="absolute top-16  lg:top-56 left-12  lg:left-24  lg:text-7xl text-4xl font-bold text-blue-900  md:mr-96 lg:mr-96	">Most Trusted Health    Partner for Life</h2>
          <h4 className="text-base absolute bottom-24 sm:bottom-64  lg:bottom-96 left-12  lg:left-24 text-blue-900">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h4>

          <button className="rounded- lg bg-sky-500 text-white text-sm py-3 px-3 hover:bg-sky-400 font-poppins-font block absolute left-12  sm:bottom-48 lg:left-24 bottom-12  lg:bottom-72  hover:duration-500 ease-in-out hover:mt-0 mt-4 hover:cursor-pointer">View All Service</button>
        </div>

        <div className=" relative">
          <img style={{ width: "100%" }} src="https://i.ibb.co/VM2QSp1/img1.webp" alt="" />
          <h4 className=" absolute  top-12  lg:top-48 font-bold  left-12  lg:left-24 tracking-widest">WELCOME TO MEDIFIC</h4>
          <h2 className="absolute top-16  lg:top-56 left-12  lg:left-24  lg:text-7xl text-4xl font-bold text-blue-900  md:mr-96 lg:mr-96	">Most Trusted Health    Partner for Life</h2>
          <h4 className="text-base absolute bottom-24 sm:bottom-64  lg:bottom-96 left-12  lg:left-24 text-blue-900">Lorem ipsum dolor sit amet consectetur adipiscing elit.</h4>

          <button className="rounded- lg bg-sky-500 text-white text-sm py-3 px-3 hover:bg-sky-400 font-poppins-font block absolute left-12  sm:bottom-48 lg:left-24 bottom-12  lg:bottom-72  hover:duration-500 ease-in-out hover:mt-0 mt-4 hover:cursor-pointer">View All Service</button>
        </div>
      </Slider>
      <div className="flex justify-center md:justify-end lg:justify-end  container mx-auto absolute my-36" style={{ marginTop: "-90px" }} >
        <div className="grid md:flex lg:flex gap-6">
          <div className="  bg-sky-500 inline-block py-10 px-12 text-white rounded">
            <h3 className=" text-2xl">Emergency Case</h3>
            <div className="flex  items-center gap-4 my-2">
              <img style={{ width: "30px" }} src="https://i.ibb.co/Wfhzcth/phone-call.png" alt="" />
              <h5 className=" text-3xl">+234-567890</h5>
            </div>
            <h3 className="">Say something about our services</h3>
          </div>
          <div className=" bg-blue-900 inline-block py-10 px-12 text-white rounded">
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