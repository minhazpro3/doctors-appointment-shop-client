import React from "react";
import {  FreeMode,  Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";

import "swiper/css";
import Rating from "react-rating";

const Testimonial = () => {
  return (
    <div className="container mx-auto overflow-x-hidden">
      <div className="text-center font-poppins-font my-8">
        <h4 className="opacity-50 tracking-widest">TESTIMONIAL</h4>
        <span className="inline-flex h-1 w-32 bg-indigo-900"></span>
        <h3 className="text-4xl text-blue-900 font-bold ">
          Patient Experience
        </h3>
      </div>

      <Swiper
        breakpoints={{
          // when window width is >= 350px
          250: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          {" "}
          <div className="font-poppins-font h-96 md:h-full lg:h-full w-full  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg  ">
            <img
              className="w-12 inline-flex justify-center my-2"
              src="https://i.ibb.co/cXDGS25/quote.png"
              alt="pic"
            />
            <p className="leading-relax">
              Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget,
              laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,{" "}
            </p>

            <div className="flex justify-center">
              <img
                className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
                src="https://i.ibb.co/Mg36V8p/download.jpg"
                alt=""
              />
            </div>

            <div>
              <Rating
                className="text-orange-600   "
                initialRating="3"
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              <span className="inline-flex h-1  bg-indigo-900"></span>
              <h3 className="tracking-wide">Patient Minhaz</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="font-poppins-font h-96 md:h-full lg:h-full w- full  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg  ">
            <img
              className="w-12 inline-flex justify-center my-2"
              src="https://i.ibb.co/cXDGS25/quote.png"
              alt="pic"
            />
            <p className="leading-relax">
              Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget,
              laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,{" "}
            </p>

            <div className="flex justify-center">
              <img
                className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
                src="https://i.ibb.co/Mg36V8p/download.jpg"
                alt=""
              />
            </div>

            <div>
              <Rating
                className="text-orange-600   "
                initialRating="3"
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              <span className="inline-flex h-1  bg-indigo-900"></span>
              <h3 className="tracking-wide">Patient Minhaz</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="font-poppins-font h-96 md:h-full lg:h-full w- full  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg  ">
            <img
              className="w-12 inline-flex justify-center my-2"
              src="https://i.ibb.co/cXDGS25/quote.png"
              alt="pic"
            />
            <p className="leading-relax">
              Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget,
              laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,{" "}
            </p>

            <div className="flex justify-center">
              <img
                className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
                src="https://i.ibb.co/Mg36V8p/download.jpg"
                alt=""
              />
            </div>

            <div>
              <Rating
                className="text-orange-600   "
                initialRating="3"
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              <span className="inline-flex h-1  bg-indigo-900"></span>
              <h3 className="tracking-wide">Patient Minhaz</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="font-poppins-font h-96 md:h-full lg:h-full w- full  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg  ">
            <img
              className="w-12 inline-flex justify-center my-2"
              src="https://i.ibb.co/cXDGS25/quote.png"
              alt="pic"
            />
            <p className="leading-relax">
              Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget,
              laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,{" "}
            </p>

            <div className="flex justify-center">
              <img
                className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
                src="https://i.ibb.co/Mg36V8p/download.jpg"
                alt=""
              />
            </div>

            <div>
              <Rating
                className="text-orange-600   "
                initialRating="3"
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              <span className="inline-flex h-1  bg-indigo-900"></span>
              <h3 className="tracking-wide">Patient Minhaz</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="font-poppins-font h-96 md:h-full lg:h-full w- full  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg  ">
            <img
              className="w-12 inline-flex justify-center my-2"
              src="https://i.ibb.co/cXDGS25/quote.png"
              alt="pic"
            />
            <p className="leading-relax">
              Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget,
              laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,{" "}
            </p>

            <div className="flex justify-center">
              <img
                className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
                src="https://i.ibb.co/Mg36V8p/download.jpg"
                alt=""
              />
            </div>

            <div>
              <Rating
                className="text-orange-600   "
                initialRating="3"
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              <span className="inline-flex h-1  bg-indigo-900"></span>
              <h3 className="tracking-wide">Patient Minhaz</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="font-poppins-font h-96 md:h-full lg:h-full w- full  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg  ">
            <img
              className="w-12 inline-flex justify-center my-2"
              src="https://i.ibb.co/cXDGS25/quote.png"
              alt="pic"
            />
            <p className="leading-relax">
              Faucibus sed orci. Vivamus neque elit, pellentesque non nunc eget,
              laoreet convallis dui. Vestibulum luctus urna eu sapien lacinia,{" "}
            </p>

            <div className="flex justify-center">
              <img
                className="h-24 w-24 my-4   rounded-full object-cover border-4 border-blue-900 "
                src="https://i.ibb.co/Mg36V8p/download.jpg"
                alt=""
              />
            </div>

            <div>
              <Rating
                className="text-orange-600   "
                initialRating="3"
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              <span className="inline-flex h-1  bg-indigo-900"></span>
              <h3 className="tracking-wide">Patient Minhaz</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
