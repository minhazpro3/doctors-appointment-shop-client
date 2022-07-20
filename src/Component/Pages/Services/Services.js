import React from "react";
import { NavLink } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="bg-sky-100 container-none mx-auto	 ">
      <div className="text-center py-8">
        <p className="text-1xl font-semibold opacity-50">SERVICES</p>
        <h3 className="text-4xl font-bold text-blue-900">Our Speciality</h3>
      </div>

      <div className="my-16">
        <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2  ">
          <NavLink to="/makAppointment">
          <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">
            <div>
              <div className="flex justify-center ">
                <img
                  className="w-24 h-24 block  "
                  src="https://i.ibb.co/THr1qXk/mother.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl">Birthing Care</h3>
              <h5 className=" opacity-50">
                Click edit to change this text. Lorem ipsum dolor sit amet,{" "}
              </h5>
            </div>
          </div>
          </NavLink>
          <NavLink to="/makAppointment">
          <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">
            <div>
              <div className="flex justify-center ">
                <img
                  className="w-24 h-24 block  "
                  src="https://i.ibb.co/1LrCzMT/healthcare.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl">Heart Care</h3>
              <h5 className=" opacity-50">
                Click edit to change this text. Lorem ipsum dolor sit amet,{" "}
              </h5>
            </div>
          </div>
          </NavLink>
        <NavLink to="/makAppointment">
        <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">
            <div>
              <div className="flex justify-center ">
                <img
                  className="w-24 h-24 block  "
                  src="https://i.ibb.co/ZGGZGJm/ambulance.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl">Emergencies</h3>
              <h5 className=" opacity-50">
                Click edit to change this text. Lorem ipsum dolor sit amet,{" "}
              </h5>
            </div>
          </div>
        </NavLink>
       <NavLink to="/makAppointment">
       <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">
            <div>
              <div className="flex justify-center ">
                <img
                  className="w-24 h-24 block  "
                  src="https://i.ibb.co/Y3wnwrN/family.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl">Family Medicine</h3>
              <h5 className=" opacity-50">
                Click edit to change this text. Lorem ipsum dolor sit amet,{" "}
              </h5>
            </div>
          </div>
       </NavLink>
         <NavLink to="/makAppointment">
         <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">
            <div>
              <div className="flex justify-center ">
                <img
                  className="w-24 h-24 block  "
                  src="https://i.ibb.co/7X6SXvG/cancer.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl">Cancer Care</h3>
              <h5 className=" opacity-50">
                Click edit to change this text. Lorem ipsum dolor sit amet,{" "}
              </h5>
            </div>
          </div>
         </NavLink>
         <NavLink to="/makAppointment">
         <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">
            <div>
              <div className="flex justify-center ">
                <img
                  className="w-24 h-24 block  "
                  src="https://i.ibb.co/z4hDpYg/orthopedics.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl">Orthopedics</h3>
              <h5 className=" opacity-50">
                Click edit to change this text. Lorem ipsum dolor sit amet,{" "}
              </h5>
            </div>
          </div>
         </NavLink>
        </div>
      </div>

      <div className="flex justify-center items-center w-100  h-14 pb-56 pt-12">
        <button className="rounded-md bg-sky-500 text-white text-sm py-3 px-3 hover:bg-sky-400 font-poppins-font block   hover:duration-500 ease-in-out hover:mt-0 mt-4">
          View All Service
        </button>
      </div>
    </div>
  );
};

export default Services;
