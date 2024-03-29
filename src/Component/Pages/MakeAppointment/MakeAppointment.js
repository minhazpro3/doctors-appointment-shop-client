import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";

const MakeAppointment = () => {
  const { user, admin } = useAuth();
  const [doctor, setDoctor] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const info = {
      name: data.name,
      email: user?.email,
      date: data.date,
      doctor: data.doctor,
      description: data.desc,
      status: "Processing",
    };
    axios
      .post(
        "https://doctors-appointmentandshop-yw1u.onrender.com/postAllPatients",
        info
      )
      .then((res) => {
        alert("done");
      });
  };

  useEffect(() => {
    axios
      .get("https://doctors-appointmentandshop-yw1u.onrender.com/getDoctors")
      .then((res) => {
        setDoctor(res.data);
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex  justify-center shadow-2xl py-12 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mb-4 text-center text-3xl font-bold text-blue-900 text-shadow-lg">
              Make An Appointment
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
              {...register("Your Email")}
              value={admin === "admin" ? "You are a admin" : user?.email}
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

            <div className="inline-block shadow  relative   border rounded w-60 md:w-80 lg:w-96   text-gray-700  focus:outline-none focus:shadow-outline mt-3">
              <select
                className="block appearance-none w-full bg-white   pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
                {...register("doctor")}
                required
              >
                <option disabled> --Select Doctor--</option>
                {doctor.map((doc, index) => (
                  <option key={index}>{doc?.name}</option>
                ))}
              </select>
            </div>
            <br />

            <textarea
              className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 h-40"
              type="date"
              placeholder="Your Message"
              {...register("desc")}
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
      <Footer />
    </div>
  );
};

export default MakeAppointment;
