import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container mx-auto ">
      <div className="text-center font-poppins-font my-8">
        <h4 className="opacity-50 tracking-widest">TESTIMONIAL</h4>
        <span className="inline-flex h-1 w-32 bg-indigo-900"></span>
        <h3 className="text-4xl text-blue-900 font-bold ">
          Patient Experience
        </h3>
      </div>

      <Slider {...settings}>
        <div className="font-poppins-font h-full   text-center bg-indigo-200 p-4 hover:bg-gray-300 rounded-lg">
          <div className="">
            <img
              className="w-12 inline-flex justify-center my-2"
              src="https://i.ibb.co/cXDGS25/quote.png" alt="pic" />

            <p className="leading-relax">
              Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget, laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia, </p>

            <div className="flex justify-center">
              <img
                className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
                src="https://i.ibb.co/Mg36V8p/download.jpg" alt="" />
            </div>

            <div>
              <span className="inline-flex h-1 w-20 bg-indigo-900"></span>
              <h3 className="tracking-wide">User Minhaz</h3>
              <h4 className="text-gray-700">Your Job Title & Position</h4>
            </div>
          </div>
        </div>
        <div className="font-poppins-font   h-full text-center bg-indigo-200 p-4 hover:bg-gray-300 rounded-lg">
          <img
            className="w-12 inline-flex justify-center my-2"
            src="https://i.ibb.co/cXDGS25/quote.png" alt="pic" />

          <p className="leading-relax">
            Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget, laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,
          </p>

          <div className="flex justify-center">
            <img
              className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
              src="https://i.ibb.co/Mg36V8p/download.jpg" alt="" />
          </div>

          <div>
            <span className="inline-flex h-1 w-20 bg-indigo-900"></span>
            <h3 className="tracking-wide">User Naeem</h3>
            <h4 className="text-gray-700">Your Job Title & Position</h4>
          </div>
        </div>
        <div className="font-poppins-font h-full text-center bg-indigo-200 p-4 hover:bg-gray-300 rounded-lg">
          <img
            className="w-12 inline-flex justify-center my-2"
            src="https://i.ibb.co/cXDGS25/quote.png" alt="pic" />

          <p className="leading-relax">
            Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget, laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,
          </p>

          <div className="flex justify-center">
            <img
              className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
              src="https://i.ibb.co/Mg36V8p/download.jpg" alt="" />
          </div>

          <div>
            <span className="inline-flex h-1 w-20 bg-indigo-900"></span>
            <h3 className="tracking-wide">User Name</h3>
            <h4 className="text-gray-700">Your Job Title & Position</h4>
          </div>
        </div>

        <div className="font-poppins-font h-full text-center bg-indigo-200 p-4 hover:bg-gray-300 rounded-lg">
          <img
            className="w-12 inline-flex justify-center my-2"
            src="https://i.ibb.co/cXDGS25/quote.png" alt="pic"/>

          <p className="leading-relax">
            Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget, laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,
          </p>

          <div className="flex justify-center">
            <img
              className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
              src="https://i.ibb.co/Mg36V8p/download.jpg" alt="" />
          </div>

          <div>
            <span className="inline-flex h-1 w-20 bg-indigo-900"></span>
            <h3 className="tracking-wide">User Name</h3>
            <h4 className="text-gray-700">Your Job Title & Position</h4>
          </div>
        </div>
        <div className="font-poppins-font h-full text-center bg-indigo-200 p-4 hover:bg-gray-300 rounded-lg">
          <img
            className="w-12 inline-flex justify-center my-2"
            src="https://i.ibb.co/cXDGS25/quote.png" alt="pic" />

          <p className="leading-relax">
            Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget,
            laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,
          </p>

          <div className="flex justify-center">
            <img
              className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
              src="https://i.ibb.co/Mg36V8p/download.jpg" alt="" />
          </div>

          <div>
            <span className="inline-flex h-1 w-20 bg-indigo-900"></span>
            <h3 className="tracking-wide">User Name</h3>
            <h4 className="text-gray-700">Your Job Title & Position</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;