import React from "react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
          300: {
            width: 300,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        // slidesPerView={3}

        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, FreeMode, Navigation]}
        className="mySwiper"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <SwiperSlide className="flex justify-center">
            {" "}
            <div className="font-poppins-font h-96 md:h-full lg:h-full w-80  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg slider-margin">
              <img
                className="w-12 inline-flex justify-center my-2"
                src="https://i.ibb.co/cXDGS25/quote.png"
                alt="pic"
              />
              <p className="leading-relax">
                Faucibus sed orci. Vivamus neque elit, pellentesque non nunc
                eget, laoreet convallis dui. Vestibulum luctus urna eu sapien
                lacinia,{" "}
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
          <SwiperSlide className="flex justify-center">
            {" "}
            <div className="font-poppins-font h-96 md:h-full lg:h-full w-80  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg slider-margin">
              <img
                className="w-12 inline-flex justify-center my-2"
                src="https://i.ibb.co/cXDGS25/quote.png"
                alt="pic"
              />
              <p className="leading-relax">
                Faucibus sed orci. Vivamus neque elit, pellentesque non nunc
                eget, laoreet convallis dui. Vestibulum luctus urna eu sapien
                lacinia,{" "}
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
          <SwiperSlide className="flex justify-center">
            {" "}
            <div className="font-poppins-font h-96 md:h-full lg:h-full w-80  text-center bg-indigo-200 p-4 hover:bg-blue-300 hover:text-white rounded-lg slider-margin">
              <img
                className="w-12 inline-flex justify-center my-2"
                src="https://i.ibb.co/cXDGS25/quote.png"
                alt="pic"
              />
              <p className="leading-relax">
                Faucibus sed orci. Vivamus neque elit, pellentesque non nunc
                eget, laoreet convallis dui. Vestibulum luctus urna eu sapien
                lacinia,{" "}
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
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
