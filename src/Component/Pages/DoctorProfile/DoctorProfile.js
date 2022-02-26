import React from "react";
import doctorPic from "../../Images/doc-profile banner.jpg";
import doctor1 from "../../Images/doctor-1.jpg";
import location from "../../Images/location.png";
import call from "../../Images/call.png";
import mail from "../../Images/gmail.png";
import rec from "../../Images/rec.png";

const DoctorProfile = () => {
  return (
    <div>
      <div className="font-poppins-font">
        <img
          className="w-full relative h-80 object-cover opacity-50 "
          src={doctorPic}
          alt="doctor"
        />
        <h4 className="absolute text-2xl   md:text-5xl lg:text-5xl -mt-44 md:-mt-48 lg:-mt-48 text-blue-900 font-bold font-poppins-font mx-16 md:mx-24 lg:mx-24">
          Dr. Marvin Robbins
        </h4>
      </div>

      <div className="container mx-auto px-4">
        <div className="my-12 font-poppins-font">
          <div className="grid grid-cols-1 md:grid-flow-col lg:grid-flow-col gap-20">
            <div className=" md:col-span-6 lg:col-span-6   ">
              <div className=" flex justify-center">
                <img
                  className=" h-96 md:h-[500px] lg:h-[500px] object-cover md:w-full lg:w-full  "
                  src={doctor1}
                  alt="doctor"
                />
              </div>
              <div className="my-4">
                <h4 className="text-2xl mb-2 text-blue-900">
                  Dr. Marvin Robbins
                </h4>
                <p className=" opacity-80 mb-4">Cardiology</p>
                <hr />

                <div className="mt-4">
                  <h4 className="inline-flex items-center gap-2">
                    {" "}
                    <img className="w-6" src={location} alt="location" /> 5800
                    Bogra Sadar, Rajshahi
                  </h4>
                  <h4 className="my-3 inline-flex items-center gap-2">
                    {" "}
                    <img className="w-6" src={mail} alt="mail" />{" "}
                    minhazpro1@gmail.com{" "}
                  </h4>
                  <br />
                  <h4 className="inline-flex items-center gap-2">
                    {" "}
                    <img className="w-6" src={call} alt="call" /> +8801737833726
                  </h4>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <svg
                      className="hover:fill-blue-900 hover:cursor-pointer"
                      fill="#4b9cf2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="30px"
                      height="50px"
                    >
                      {" "}
                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="hover:fill-blue-900 hover:cursor-pointer"
                      fill="#4b9cf2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="30px"
                      height="50px"
                    >
                      {" "}
                      <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="hover:fill-blue-900 hover:cursor-pointer"
                      fill="#4b9cf2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="30px"
                      height="50px"
                    >
                      <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:col-span-2 lg:col-span-2 container mx-auto">
              <div>
                <h3 className="text-xl text-blue-900 ">Biography</h3>
                <p className="leading-loose opacity-80 ">
                  My goal is to provide Lorem ipsum dolor sit amet consectetur
                  adipiscing elit senectus, dis duis tortor litora nascetur
                  proin vehicula suscipit leo, nibh ultrices maecenas habitasse
                  curae eleifend cras. Montes torquent pretium gravida ligula
                  dapibus varius fringilla interdum cubilia, enim sodales
                  lacinia tempor vivamus dictumst sem odio metus, vitae praesent
                  congue primis ornare fermentum imperdiet ut. Accumsan massa
                  nostra dui sollicitudin vestibulum ullamcorper, venenatis eros
                  quam sagittis himenaeos ad, donec ultricies augue hendrerit
                  mi. Feugiat mus elementum dictum aliquet luctus sed
                  suspendisse diam, rutrum phasellus semper mauris laoreet
                  volutpat at, condimentum inceptos class cum auctor rhoncus
                  blandit eu, curabitur per aptent platea porttitor urna.
                </p>
              </div>

              <div className="mt-6">
                <div>
                  <h3 className="text-xl text-blue-900 mb-6">
                    Training & Credentials
                  </h3>
                  <hr className="text-blue-900 p-8" />
                </div>
                <div>
                  <div className="md:flex lg:flex justify-between gap-56">
                    <h4 className="text-base opacity-75">Education</h4>
                    <div className="opacity-80">
                      <h4 className="my-4 inline-flex items-start gap-2">
                        <img className="w-5" src={rec} alt="rec" />
                        Master of Lorem ipsum dolor sit amet, Univerity of Lorem
                        ipsum dolor sit amet
                      </h4>
                      <h4 className="mb-7 inline-flex items-start gap-2">
                        <img className="w-5" src={rec} alt="rec" />
                        Master of Lorem ipsum dolor sit amet, Univerity of Lorem
                        ipsum dolor sit amet
                      </h4>
                    </div>
                  </div>
                  <hr />
                  <div className="md:flex lg:flex  justify-between gap-56 mt-12">
                    <h4 className="text-base opacity-75">Certificate</h4>
                    <div className="opacity-80">
                      <h4 className="my-4 inline-flex items-start gap-2">
                        <img className="w-5" src={rec} alt="rec" />
                        inline-flex items-start gap-2 Master of Lorem ipsum
                        dolor sit amet, Univerity of Lorem ipsum dolor sit amet
                      </h4>
                      <h4 className="mb-7 inline-flex items-start gap-2">
                        <img className="w-5" src={rec} alt="rec" />
                        Master of Lorem ipsum dolor sit amet, Univerity of Lorem
                        ipsum dolor sit amet
                      </h4>
                    </div>
                  </div>
                  <hr />
                  <h4 className="text-2xl text-blue-900 mt-6">
                    Special Interests
                  </h4>
                  <h4 className="opacity-80 mt-8">
                    Montes torquent pretium gravida ligula dapibus varius
                    fringilla interdum cubilia, enim sodales lacinia tempor
                    vivamus dictumst sem odio metus, vitae praesent congue
                    primis ornare fermentum imperdiet ut.{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;