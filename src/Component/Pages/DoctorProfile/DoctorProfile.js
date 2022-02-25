import React from "react";
import doctorPic from "../../Images/doc-profile banner.jpg";
import doctor1 from "../../Images/doctor-1.jpg";

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
      <div className="container mx-auto my-12 font-poppins-font">
        <div className="grid  md:grid-flow-col lg:grid-flow-col gap-20">
          <div>
            <div className="col-span-6 md:col-span-4 lg:col-span-4   flex justify-center">
              <img
                className="w-80 h-[500px] object-cover md:w-96 lg:w-96 md:mx-24 lg:mx-24  "
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
            </div>
            <div>
              <h4>5800 Bogra Sadar, Rajshahi</h4>
              <h4 className="my-3">minhazpro1@gmail.com </h4>
              <h4>+8801737833726</h4>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-3 ">
            <div>
              <h3 className="text-xl text-blue-900 ">Biography</h3>
              <p className="leading-loose opacity-80">
                My goal is to provide Lorem ipsum dolor sit amet consectetur
                adipiscing elit senectus, dis duis tortor litora nascetur proin
                vehicula suscipit leo, nibh ultrices maecenas habitasse curae
                eleifend cras. Montes torquent pretium gravida ligula dapibus
                varius fringilla interdum cubilia, enim sodales lacinia tempor
                vivamus dictumst sem odio metus, vitae praesent congue primis
                ornare fermentum imperdiet ut. Accumsan massa nostra dui
                sollicitudin vestibulum ullamcorper, venenatis eros quam
                sagittis himenaeos ad, donec ultricies augue hendrerit mi.
                Feugiat mus elementum dictum aliquet luctus sed suspendisse
                diam, rutrum phasellus semper mauris laoreet volutpat at,
                condimentum inceptos class cum auctor rhoncus blandit eu,
                curabitur per aptent platea porttitor urna.
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
                    <h4 className="my-4">
                      Master of Lorem ipsum dolor sit amet, Univerity of Lorem
                      ipsum dolor sit amet
                    </h4>
                    <h4 className="mb-7">
                      Master of Lorem ipsum dolor sit amet, Univerity of Lorem
                      ipsum dolor sit amet
                    </h4>
                  </div>
                </div>
                <hr />
                <div className="md:flex lg:flex justify-between gap-56 mt-12">
                  <h4 className="text-base opacity-75">Certificate</h4>
                  <div className="opacity-80">
                    <h4 className="my-4">
                      Master of Lorem ipsum dolor sit amet, Univerity of Lorem
                      ipsum dolor sit amet
                    </h4>
                    <h4 className="mb-7">
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
                  vivamus dictumst sem odio metus, vitae praesent congue primis
                  ornare fermentum imperdiet ut.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
