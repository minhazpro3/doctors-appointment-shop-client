import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {

    fetch("http://localhost:5000/madeAdmin", {
      method: "PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  };
  return (
    <div >
      <div className="container mx-auto flex justify-center my-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 focus:border-blue-900 border-2 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <input className="shadow-2xl text-xl text-white bg-blue-900 w-full py-1 rounded-md hover:text-blue-900 hover:bg-white hover:border-2 hover:cursor-pointer" type="submit" />
      </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
