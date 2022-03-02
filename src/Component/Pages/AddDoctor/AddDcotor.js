import React from "react";
import { useForm } from "react-hook-form";
import "../AddProducts/AddProducts.css";
import Footer from "../Footer/Footer";

const AddDcotor = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="container mx-auto ">
        <div className="w-full bg-gray-300 py-16 px-8 my-12 font-poppins-font">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
              <div className="flex justify-center">
                <img
                  className="w-80 h-80 object-cover "
                  src="https://i.ibb.co/M8RmC8Y/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profil.jpg"
                  alt="profile"
                />
              </div>
              <div>
                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72 py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  {...register("name")}
                  placeholder="Name *"
                  type="text"
                  required
                />
                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72 py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  {...register("Email")}
                  placeholder="Email *"
                  type="email"
                  required
                />
                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72 py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  {...register("jobTittle")}
                  placeholder="Job Tittle *"
                  type="text"
                  required
                />
                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72 py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  {...register("age")}
                  placeholder="Age *"
                  type="number"
                  required
                />
              </div>

              <div>
                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72 py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  {...register("biography")}
                  placeholder="Biography *"
                  type="text"
                  required
                />

                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72 py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  {...register("address")}
                  placeholder="Address *"
                  type="text"
                  required
                />
                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72 py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  {...register("phone")}
                  placeholder="Phone *"
                  type="number"
                  required
                />
                <input
                  className="border-2 border-black  w-80 md:w-72  lg:w-72   rounded-lg focus:outline-blue-900 ml-2 my-6  "
                  {...register("image")}
                  type="file"
                  required
                />

                <input
                  className="border-2 border-black w-80 md:w-72 lg:w-72  py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddDcotor;
