import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import loginImg from "../../Images/login img.png";
import Footer from "../Footer/Footer";

const Login = () => {
  // const {googleSignIn,setUser}=useFirebase()
  const { register, handleSubmit } = useForm();
   

const onSubmit =  data =>{
  console.log(data);
}


  

 

  return (
    <div >
      <div className="container mx-auto font-poppins-font  md:p-28">
        <div className="bg-red-500 p-8 md:p-32">
          <div className="grid  lg:grid-cols-2 justify-center gap-8 bg-red-300	 rounded-md">
            <div >
              <div className="flex justify-center  ">
                <img   src="https://ecurater.com/wp-content/uploads/2020/10/login1.png" alt="regImg" />
              </div>
              <h4 className="text-white text-center text-2xl">
                Start for free and get attractive offers.
              </h4>
            </div>
            <div className="flex justify-center bg-white md:rounded-tr-md md:rounded-br-md ">
              <div>
                <div >
                  <h3 className="text-2xl font-bold pt-10">
                    Get's Started
                  </h3>
                  <button className="my-3 w-full bg-blue-700 text-white py-2 px-4 rounded-md">
                    <i className="fa fa-google-plus"></i> Signup with google
                  </button>
                </div>

                <div class="w-full max-w-xs">
                  <form onSubmit={handleSubmit(onSubmit)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    
                    <div class="mb-6">
                      <label class="block text-gray-700 text-sm font-bold  ">
                        Email
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-blue-900"
                        {...register("email")}
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="mb-6">
                      <label class="block text-gray-700 text-sm font-bold  ">
                        Password
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-blue-900"
                        {...register("password")}
                        type="password"
                        placeholder=" Password"
                      />
                    </div>
                    
                    <div class="flex items-center justify-between">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Sign In
                      </button>
                      <p class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 disable">
                        Forgot Password?
                      </p>
                    </div>
                    <NavLink  to="/register "><p className="text-orange-600 font-medium mt-8">Don't have an account?</p></NavLink>
                  </form>

                  <p class="text-center text-gray-900 text-xs pb-5">
                    &copy;2022 Md Minhaz. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </div>
  );
};

export default Login;
