import React from "react";

const Pakages = () => {
  return (
    <div>
      <div className="container mx-auto font-poppins-font mb-8">
        <h5 className="text-3xl font-bold text-center my-12">Packages</h5>
        <div className="grid   justify-items-center  gap-6 items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          <div className="w-96 bg-white shadow-2xl shadow-blue-900 p-6 border-indigo-700 border-2">
            <div className=" rounded-sm  border-dashed  border-2 border-blue-900">
              <div className="text-center my-10">
                <h3 className="text-4xl font-bold">SILVER PLAN</h3>
                <h5 className="text-xl">$33.99</h5>
              </div>
              <div className="mx-10 mt-20 mb-16">
                <h5>
                  {" "}
                  It is a long established fact a reader will be distracted.
                </h5>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Update</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>File Compressed</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Commercial use</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Support</h4>
                </div>
              </div>
              <div className=" flex justify-center">
                <button className="px-4 py-2 w-56 text-white  bg-blue-900">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
          <div className="w-96 bg-white shadow-2xl shadow-blue-900 p-6 border-indigo-700 border-2 ">
            <div className=" rounded-sm  border-dashed  border-2 border-blue-900">
              <div className="text-center my-10">
                <h3 className="text-4xl font-bold">GOLD PLAN</h3>
                <h5 className="text-xl">$66.99</h5>
              </div>
              <div className="mx-10 mt-20 mb-16">
                <h5>
                  {" "}
                  It is a long established fact a reader will be distracted.
                </h5>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Update</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>File Compressed</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Commercial use</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Support</h4>
                </div>
              </div>
              <div className=" flex justify-center">
                <button className="px-4 py-2 w-56 text-white  bg-blue-900">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
          <div className="w-96 bg-white shadow-2xl shadow-blue-900 p-6 border-indigo-700 border-2 ">
            <div className=" rounded-sm  border-dashed  border-2 border-blue-900">
              <div className="text-center my-10">
                <h3 className="text-4xl font-bold">PREMIUM PLAN</h3>
                <h5 className="text-xl">$99.99</h5>
              </div>
              <div className="mx-10 mt-20 mb-16">
                <h5>
                  {" "}
                  It is a long established fact a reader will be distracted.
                </h5>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Update</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>File Compressed</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Commercial use</h4>
                </div>
                <div className="flex gap-2 mt-6">
                  <i className="far fa-check-circle text-sky-600	 "></i>
                  <h4>Support</h4>
                </div>
              </div>
              <div className=" flex justify-center">
                <button className="px-4 py-2 w-56 text-white  bg-blue-900">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pakages;
