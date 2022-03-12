import React from "react";
import { useForm } from "react-hook-form";
import "../AddProducts/AddProducts.css";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";

const AddDcotor = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('jobTittle', data.jobTittle)
    formData.append('age', data.age)
    formData.append('address', data.address)
    formData.append('phone', data.phone)
    formData.append('image', data.image[0])

    const url = 'http://localhost:5000/addDoctor'
    fetch(url, {
      method: "POST",
      body: formData
       
    })
    .then(res=>res.json())
    .then(data=>{
     
      if(data.acknowledged){
        Swal.fire(
          'Good job!',
          'You Product added the Successful!',
          'success'
        )
        reset()
      }
    
    })
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
