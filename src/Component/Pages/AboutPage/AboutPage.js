import React from "react";
import About from "../About/About";
import AboutDoctors from "../AboutDoctors/AboutDoctors";
import HomeCounter from "../HomeCounter/HomeCounter";
import MissionValues from "../MissionValues/MissionValues";
import Navbar from "../Navbar/Navbar";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="banner-about mb-8">
        <div className="container mx-auto pl-12 pt-24 md:pt-40 lg:pt-40">
          <h4 className=" text-4xl   md:text-7xl lg:text-7xl font-poppins-font font-bold text-blue-900">
            About Us
          </h4>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h4 className="text-2xl my-6 inline-block font-bold text-center text-blue-900 border-b-[2px] border-gray-600">
            ABOUT US
          </h4>
        </div>
        <About />
      </div>
      <div className="bg-sky-600 mt-56 py-8">
          <HomeCounter/>
      </div>
      <div>
          <MissionValues/>
          <AboutDoctors/>
      </div>

    </div>
  );
};

export default AboutPage;
