import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const AboutDoctors = () => {
  return (
    <div>
      <div className="container mx-4 md:mx-auto lg:mx-auto font-poppins-font my-4">
        <h6 className=" font-semibold opacity-50 tracking-[.25rem]">
          {" "}
          DOCTORS{" "}
        </h6>
        <div className="flex justify-between mb-6">
          <h4 className=" text-blue-900 text-2xl md:text-4xl lg:text-4xl font-bold">
            Meet Our Specialist
          </h4>
          <button className="text-white text-sm bg-blue-600 hover:bg-blue-700 px-1 md:px-3 lg:px-3 py-2">
            View All Doctors
          </button>
        </div>
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <div className="w-80 rounded overflow-x-hidden shadow-lg">
              <img
                className="w-full h-72 object-cover"
                src="https://i.ibb.co/qyC82cW/confident-female-doctor-office-desk-sitting-smiling-camera-hand-chin-health-care-prevention-concept.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-4 py-4">
                <div className="font-bold text-xl  text-blue-900">
                  Dr. Marvin Robbins
                </div>
                <div className="font-bold text-base mb-2 opacity-50">
                  Cardiology{" "}
                </div>
                <p className="text-gray-700 text-base my-6 opacity-50">
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <NavLink
                  to="/"
                  className="text-blue-900 inline-flex items-center gap-3"
                >
                  Doctor Profile <BsArrowRight />{" "}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 rounded overflow-x-hidden shadow-lg">
              <img
                className="w-full h-72 object-cover"
                src="https://i.ibb.co/qyC82cW/confident-female-doctor-office-desk-sitting-smiling-camera-hand-chin-health-care-prevention-concept.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-4 py-4">
                <div className="font-bold text-xl  text-blue-900">
                  Dr. Marvin Robbins
                </div>
                <div className="font-bold text-base mb-2 opacity-50">
                  Cardiology{" "}
                </div>
                <p className="text-gray-700 text-base my-6 opacity-50">
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <NavLink
                  to="/"
                  className="text-blue-900 inline-flex items-center gap-3"
                >
                  Doctor Profile <BsArrowRight />{" "}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 rounded overflow-x-hidden shadow-lg">
              <img
                className="w-full h-72 object-cover"
                src="https://i.ibb.co/qyC82cW/confident-female-doctor-office-desk-sitting-smiling-camera-hand-chin-health-care-prevention-concept.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-4 py-4">
                <div className="font-bold text-xl  text-blue-900">
                  Dr. Marvin Robbins
                </div>
                <div className="font-bold text-base mb-2 opacity-50">
                  Cardiology{" "}
                </div>
                <p className="text-gray-700 text-base my-6 opacity-50">
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <NavLink
                  to="/"
                  className="text-blue-900 inline-flex items-center gap-3"
                >
                  Doctor Profile <BsArrowRight />{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutDoctors;
