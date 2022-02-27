import React from 'react';

const DoctorsHome = () => {
    return (
        <div className="xs:mx-4 container mx-auto mb-24 mt-8 md:mt-36 lg:mt-36">
      <div className=" grid gap-x-8 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
        <div className="px-4 font-poppins-font" >
          <div >
          <h6 className="text-1xl font-semibold opacity-50"> OUR DOCTORS</h6>
          <h4 className="text-4xl font-bold text-blue-900	my-3">
          Trusted Specialist Doctors

          </h4>

          <p className="opacity-50  my-5">
          Tempor cursus nisl imperdiet porta in
           ipsum dolor sit amet consectetur adipiscing elit, volutpat
            cubilia suscipit senectus congue consequat, ad habitant maecenas
            libero hendrerit porttitor. Tempor cursus nisl imperdiet porta in
          </p>

         
          <button className="rounded-md my-6 md:my-0 lg:my-0 bg-sky-500 text-white text-sm py-2 px-3 hover:bg-sky-400  font-poppins-font block   hover:mt-0 	 ">
            Know More
          </button>
          </div>
        </div>
        <div className="px-4">
          <img
            src="https://i.ibb.co/HFHsKHx/diverse-medical-team-of-doctors-looking-at-camera-UW9-F7-DT-owwmah6sn5xo6l7o3flcsrtkcid825lnws8km2nd.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default DoctorsHome;