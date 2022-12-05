import React from "react";
import { useForm } from "react-hook-form";
import "../AddProducts/AddProducts.css";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const AddDcotor = () => {
  const [imgUrl, setImageUrl] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData1 = {
      name: data.name,
      email: data.email,
      jobTittle: data.jobTittle,
      age: data.age,
      address: data.address,
      phone: data.phone,
      image: imgUrl,
    };

    const url =
      "https://doctors-appointment-shop-server-production.up.railway.app/addDoctor";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData1),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire(
            "Good job!",
            " Added a new doctor the Successful!",
            "success"
          );
          reset();
        }
      });
  };

  const setImage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("key", "d45a4ad9a09ad1464075aa3c82125b64");
    formData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((res) => {
        setImageUrl(res.data.data.url);
      })
      .catch((error) => {});
  };

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
                  {...register("email")}
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
                  placeholder="Biography "
                  type="text"
                  disabled
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
                  onChange={setImage}
                  required
                />

                <input
                  className="border-2 border-black hover:text-white cursor-pointer hover:bg-indigo-500 w-80 md:w-72 lg:w-72  py-2 rounded-lg focus:outline-blue-900 ml-2 my-6 px-2"
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
