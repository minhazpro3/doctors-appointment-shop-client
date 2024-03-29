import React from "react";
import "./Pakages.css";
import img1 from "../../Images/patient.png"
import img2 from "../../Images/patient-1.png"

const Pakages = () => {
  return (
    <div className="my-24">

      <div className="container mx-auto">
      <div className="flex justify-center mb-16">
      <div className="shadow-2xl shadow-blue-900 px-4 py-2 rounded-md bg-[#19223c] text-white inline-block ">
         <h2 className="text-4xl font-serif text-center ">  Our Society</h2>
         <h2 className="text-2xl font-serif text-center mb-8">  Service is our goal, we are committed</h2>
      </div>
      </div>
      <div className=" md:flex  justify-center items-center md:gap-4"> 
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="">
          <img src={img2} alt="" />
        </div>
      </div>
      </div>


     {/*  <div className="container mx-auto font-poppins-font mb-8">
        <h5 className="text-3xl font-bold text-center my-12">Packages</h5>
        <div className="grid   justify-items-center  gap-4 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        
          <div className="w-80 h-[450px]  shadow-md shadow-blue-900 p-6 border-indigo-700 border-2 background-style hover:border-purple-900 ">
            <div className=" rounded-sm  border-dashed hover:border-white border-2 border-blue-900 h-96">
              <div className="text-center my-5 ">
                <h3 className="text-3xl font-bold text-purple-800">SILVER PLAN</h3>
                <h5 className="text-xl text-pink-800">$33.99</h5>
              </div>
              <div className="mx-10 mt-10 ">
                <h5>
                  {" "}
                  It is a long established facts a reader will be    distracted.
                </h5>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Update</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>File Compressed</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Commercial use</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Support</h4>
                </div>
              </div>
              <div className=" flex justify-center mt-8 px-6">
              <button className="btn w-full   relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                  <span className="w-0 h-full  rounded bg-indigo-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-black px-6 py-2 border-2 border-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    Choose plan
                  </span>
                </button>
              </div>
            </div>
          </div>
         
          <div className="w-80 h-[450px]  shadow-md shadow-blue-900 p-6 border-indigo-700 border-2 background-style hover:border-purple-900 ">
            <div className=" rounded-sm  border-dashed hover:border-white border-2 border-blue-900 h-96">
              <div className="text-center my-5 ">
                <h3 className="text-3xl font-bold text-pink-800">GOLD PLAN</h3>
                <h5 className="text-xl text-orange-800">$66.99</h5>
              </div>
              <div className="mx-10 mt-10 ">
                <h5>
                  {" "}
                  It is a long established fact a reader will be distracted.
                </h5>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Update</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>File Compressed</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Commercial use</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Support</h4>
                </div>
              </div>
              <div className=" flex justify-center mt-8 px-6">
              <button className="btn w-full  relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                  <span className="w-0 h-full  rounded bg-indigo-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-black px-6 py-2 border-2 border-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    Choose plan
                  </span>
                </button>
              </div>
            </div>
          </div>
         
          <div className="w-80 h-[450px]  shadow-md shadow-blue-900 p-6 border-indigo-700 border-2 background-style hover:border-purple-900 ">
            <div className=" rounded-sm  border-dashed hover:border-white border-2 border-blue-900 h-96">
              <div className="text-center my-5 ">
                <h3 className="text-3xl font-bold text-orange-800">PREMIER PLAN</h3>
                <h5 className="text-xl text-indigo-800">$99.99</h5>
              </div>
              <div className="mx-10 mt-10 ">
                <h5>
                  {" "}
                  It is a long established fact a reader will be distracted.
                </h5>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Update</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>File Compressed</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Commercial use</h4>
                </div>
                <div className="flex gap-2 ">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Support</h4>
                </div>
              </div>
              <div className=" flex justify-center mt-8 px-6">
                <button className="btn w-full  relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
                  <span className="w-0 h-full  rounded bg-indigo-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                  <span className="w-full text-black px-6 py-2 border-2 border-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    Choose plan
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Pakages;
