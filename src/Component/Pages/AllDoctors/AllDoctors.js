import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import HomeCounter from "../HomeCounter/HomeCounter";
import "./AllDoctors.css";
import axios  from 'axios';

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);

 
  useEffect(()=>{
    axios.get("https://aqueous-stream-06459.herokuapp.com/getDoctors")
    .then(res=>{
      setDoctors(res.data)
    })
  },[])
   
  return (
    <div>
      <div className="bg-allDoctors-banner object-cover w-full h-96 font-poppins-font">
        <h3 className=" text-3xl md:text-5xl lg:text-5xl py-20 mx-12 font-bold text-blue-900 text-shadow-xl tracking-wider	">
          Life Care Family !!
        </h3>
      </div>
      <div className="container mx-auto my-24 ">
        <h4 className="text-center text-4xl text-shadow-xl font-bold text-blue-900 tracking-wide mb-12">
          Find Your Perfect Doctors*
        </h4>

        {!doctors.length ? (
          <div className="text-center text-3xl">
            <svg
              role="status"
              className="inline mr-2 w-20 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doctor, index) => (
              <div key={doctor._id} className="flex justify-center">
                <div className="w-80 h-[29rem] rounded overflow-x-hidden shadow-lg zoomDiv">
                  
                    
                    
                    {doctor?.img? <img className="w-full h-72 object-cover zoom" src={doctor?.img} alt="" />:<h3>loadimg</h3>}
                   
                  
                  <div className="px-4 py-4">
                    <div className="font-bold text-xl  text-blue-900">
                      {doctor.name}
                    </div>
                    <div className="font-bold text-base mb-2 opacity-50">
                      {doctor.jobTittle}{" "}
                    </div>
                    <p className="text-gray-700 text-base my-6 opacity-50">
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                    <NavLink
                      to={`/doctorProfile/${doctor._id}`}
                      className="text-blue-900 inline-flex items-center gap-3"
                    >
                      Doctor Profile <BsArrowRight />{" "}
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-60 pb-10 pt-8 bg-blue-700">
        <HomeCounter />
      </div>
      <Footer />
    </div>
  );
};

export default AllDoctors;
