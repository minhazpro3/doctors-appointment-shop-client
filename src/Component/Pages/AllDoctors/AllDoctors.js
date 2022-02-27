import React from "react";
import "./AllDoctors.css";

const AllDoctors = () => {
  return (
    <div>
      {/* <div className="container mx-auto my-24 ">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
            <div class="rounded-lg shadow-lg bg-white ">
           
            <div >
                <div className="flex justify-center relative">
                    <img src="https://wp.retenvi.com/medical/wp-content/uploads/sites/12/2022/02/doctor-5.jpg" alt="img"/>
                </div>
                <div className="absolute ">
                   <h3 className="inline-block">amar sonar bangla ami tomoy ar bangla ami tomoy bakj  ar bangla ami tomoy bakj  ar bangla ami tomoy bakj  ar bangla ami tomoy bakj  ar bangla ami tomoy bakj ar bangla ami tomoy bakj  ar bangla ami tomoy bakj  ar bangla ami tomoy bakj bakj vashi</h3>
                   <h3>amar sonar bangla ami tomoy bakj vashi</h3>
                   <h3>amar sonar bangla ami tomoy bakj vashi</h3>
                </div>
            </div>
            
          </div>
         
         
        </div>
      </div> */}

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
            <div className="flex justify-center ">
              <div className="w-80 hoverDIv h-[26rem] duration-1000 rounded overflow-x-hidden shadow-lg overflow-y-hidden">
                <img
                  className="w-full h-72  object-cover static  duration-1000"
                  src="https://i.ibb.co/qyC82cW/confident-female-doctor-office-desk-sitting-smiling-camera-hand-chin-health-care-prevention-concept.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-4 py-4  inline-block  bg-white duration-500 rounded-tl-lg rounded-tr-lg showDIv">
                  <div className="font-bold text-xl  text-blue-900">
                    Dr. Marvin Robbins
                  </div>
                  <div className="font-bold text-base mb-2 opacity-50">
                    Cardiology{" "}
                  </div>
                  <p className="text-gray-700 text-base mt-14 opacity-50">
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-center">
                    <button className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500">
                      Add To Cart
                    </button>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
