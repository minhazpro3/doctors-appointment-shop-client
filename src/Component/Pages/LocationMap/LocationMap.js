import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const containerStyle = {
  width: "86%",
  height: "250px",
};

/* REACT_APP_GOOGLE_MAP_API_KEY=AIzaSyA1Y2jg6I4bfdp1T1vPPF6pV5Sf3HsXEnw

REACT_APP_GOOGLE_MAP_API_KEY=AIzaSyBEYc0pF8doUaqqaksgFw1w20f-3Yyk8bw */

const center = {
  lat: 24.848078,
  lng: 89.372963,
};

const LocationMap = () => {
  const [doctors, setDoctors] = useState([]);
  const { user,admin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
   
    data.status = "Processing";
    fetch("https://aqueous-stream-06459.herokuapp.com/postAllPatients", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Thank you!", "Your Appointment Submitted", "success");
          reset();
        }
      });
  };

  useEffect(() => {
    fetch("https://aqueous-stream-06459.herokuapp.com/getDoctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        
      });
  }, []);

  

  return (
    <div>
      <div className="container mx-auto font-poppins-font">
        <div className=" relative  grid  sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-blue-500  py-20">
          <div>
            <div className="flex justify-center mx-auto px-3">
              <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
              >
                <GoogleMap
                  className="w-56"
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                >
                  <></>
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="my-8 ml-14	">
              <h4 className="mt-4 font-medium text-white  border-b-[2px] border-solid inline-block  border-white">
                {" "}
                minhazpro1@gmail.com
              </h4>

              <br />
              <h4 className="mt-4  font-medium text-white  border-b-[2px] border-solid  inline-block border-white">
                +8801737-833906
              </h4>
              <br />
              <h4 className="mt-4 font-medium text-white   border-b-[2px] border-solid inline-block border-white">
                Monday - Friday : 08.00 -18.00
              </h4>

              <h4 className="mt-4 font-medium text-white ">
                Saturday - Sunday : 09.00 -15.00
              </h4>
            </div>
          </div>
          <div className="flex  justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="mb-4 text-center text-3xl font-bold text-white">
                Appointment
              </h3>
              <input
                className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                type="text"
                placeholder="Your Name"
                {...register("name")}
                required
              />
              <br />
              <input
                className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                type="email"
                placeholder="Email"
                {...register("email")}
                value={admin==="admin"?"You are a admin":user?.email}
                required
                 
              />
              <br />
              <input
                className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                type="date"
                {...register("date")}
                required
              />
              <br />

              <div className="inline-block shadow  relative bg-white  appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3">
                <select
                  className="block appearance-none w-full bg-white   pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
                  {...register("doctor")}
                  required
                >
                  <option  disabled>
                    {" "}
                    --Select Doctor--
                  </option>
                  {doctors.map((doctor, index) => (
                    <option className="px-2" key={doctor._id}>
                      {doctor?.name}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none  absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <br />

              <textarea
                className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 h-40"
                type="date"
                placeholder="Your Message"
                {...register("description")}
                required
              />
              <br />

              <input
                className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3   text-blue-500 hover:text-white bg-white hover:bg-slate-900 hover:cursor-pointer leading-tight focus:outline-none focus:shadow-outline mt-3"
                type="submit"
                value="Book an Appointment"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="w-full absolute  -z-20 -mt-80 h-96 bg-slate-900 "></div>
    </div>
  );
};

export default LocationMap;
