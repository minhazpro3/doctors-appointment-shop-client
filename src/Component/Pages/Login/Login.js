import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import Footer from "../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const {
    
    setUser,
    googleSignIn,
    setIsLoading,
    loginEmailPassword,
  } = useAuth();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/";

  const onSubmit = async (data) => {
    await loginEmailPassword(data.email, data.password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate(url);
        setIsLoading(true);
      })
      .catch((error) => {
        warning(false);
      })
      .finally(() => setIsLoading(false));
  };

  const warning = (value) => {
    if (!value) {
      Swal.fire({
        title: "Invalid Your Input!",
        text: "Please enter right key",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  //  google sign in
  const handleGoolgeLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(url);
        setIsLoading(true);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="container mx-auto font-poppins-font  my-12">
        <div className="bg-red-500 p-8 md:p-32">
          <div className="grid  lg:grid-cols-2 justify-center  bg-red-300	 rounded-md">
            <div>
              <div className="flex justify-center p-8 ">
                <img
                  className="w-full"
                  src="https://ecurater.com/wp-content/uploads/2020/10/login1.png"
                  alt="regImg"
                />
              </div>
              <h4 className="text-white text-center text-2xl mb-6">
                Start for free and get attractive offers.
              </h4>
            </div>
            <div className="flex justify-center w-full bg-white md:rounded-tr-md md:rounded-br-md ">
              <div>
                <div className="w-full max-w-xs">
                  <h3 className="text-2xl font-bold pt-10">Get's Started</h3>
                  <button
                    onClick={handleGoolgeLogin}
                    className="my-3 w-72 bg-blue-700 text-white py-2 px-4 rounded-md"
                  >
                    <i className="fa fa-google-plus"></i> Signup with google
                  </button>
                </div>

                <div className="w-full max-w-xs">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded w-full p-4 mb-4"
                  >
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold  ">
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight   focus:shadow-outline focus:outline-blue-900"
                        {...register("email")}
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold  ">
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight   focus:shadow-outline focus:outline-blue-900"
                        {...register("password")}
                        type="password"
                        placeholder=" Password"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                    <NavLink to="/register ">
                      <p className="text-orange-600 font-medium mt-8">
                        Don't have an account?
                      </p>
                    </NavLink>
                  </form>

                  <p className="text-center text-gray-900 text-xs pb-5">
                    &copy;2022 Md Minhaz. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
