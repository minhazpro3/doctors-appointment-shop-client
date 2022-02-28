import React from "react";
import Rating from "react-rating";
import "./Shop.css";
import med2 from "../../Images/med-2.png";
import Footer from "../Footer/Footer";

const Shop = () => {
  return (
    <div>
      <div className="mb-6 relative">
        <img className="w-full object-cover" src={med2} alt="banner" />
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-5xl lg:text-5xl font-poppins-font font-extrabold text-indigo-900 ml-10 absolute top-20 md:top-28 lg:32">
            Simple Shop
          </h3>
        </div>
      </div>
      <div className="container mx-auto font-poppins-font my-8">
        <h4 className="text-center text-3xl text-indigo-900 my-6 font-bold text-shadow-lg">
          Surgical && Medicine
        </h4>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className=" md:col-span-2 lg:col-span-2 ">
            <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="flex justify-center ">
                <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
                  <img
                    className="w-full h-72   object-cover static "
                    src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div>
                    <h4 className="text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600">
                      - 17%
                    </h4>
                  </div>
                  <div className="px-4 py-4 mt-4 inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
                    <div className="font-bold text-xl  text-blue-900 ">
                      <Rating
                        className="text-orange-600   "
                        initialRating={"3"}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      ></Rating>
                      <h4> Hand Sanitizer</h4>
                      <h4 className="text-base text-stone-600 mr-2">
                        $25.00{" "}
                        <spn className="line-through text-stone-600 opacity-75 text-base font-normal">
                          $30.00
                        </spn>
                      </h4>
                      <p className="text-gray-700 text-base font-normal mt-2 opacity-50">
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                      </p>
                    </div>

                    <div className="text-center">
                      <button className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
                  <img
                    className="w-full h-72   object-cover static "
                    src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div>
                    <h4 className="text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600">
                      - 17%
                    </h4>
                  </div>
                  <div className="px-4 py-4 mt-4 inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
                    <div className="font-bold text-xl  text-blue-900 ">
                      <Rating
                        className="text-orange-600   "
                        initialRating={"3"}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      ></Rating>
                      <h4> Hand Sanitizer</h4>
                      <h4 className="text-base text-stone-600 mr-2">
                        $25.00{" "}
                        <spn className="line-through text-stone-600 opacity-75 text-base font-normal">
                          $30.00
                        </spn>
                      </h4>
                      <p className="text-gray-700 text-base font-normal mt-2 opacity-50">
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                      </p>
                    </div>

                    <div className="text-center">
                      <button className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
                  <img
                    className="w-full h-72   object-cover static "
                    src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div>
                    <h4 className="text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600">
                      - 17%
                    </h4>
                  </div>
                  <div className="px-4 py-4 mt-4 inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
                    <div className="font-bold text-xl  text-blue-900 ">
                      <Rating
                        className="text-orange-600   "
                        initialRating={"3"}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      ></Rating>
                      <h4> Hand Sanitizer</h4>
                      <h4 className="text-base text-stone-600 mr-2">
                        $25.00{" "}
                        <spn className="line-through text-stone-600 opacity-75 text-base font-normal">
                          $30.00
                        </spn>
                      </h4>
                      <p className="text-gray-700 text-base font-normal mt-2 opacity-50">
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
                  <img
                    className="w-full h-72   object-cover static "
                    src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div>
                    <h4 className="text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600">
                      - 17%
                    </h4>
                  </div>
                  <div className="px-4 py-4 mt-4 inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
                    <div className="font-bold text-xl  text-blue-900 ">
                      <Rating
                        className="text-orange-600   "
                        initialRating={"3"}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      ></Rating>
                      <h4> Hand Sanitizer</h4>
                      <h4 className="text-base text-stone-600 mr-2">
                        $25.00{" "}
                        <spn className="line-through text-stone-600 opacity-75 text-base font-normal">
                          $30.00
                        </spn>
                      </h4>
                      <p className="text-gray-700 text-base font-normal mt-2 opacity-50">
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
                  <img
                    className="w-full h-72   object-cover static "
                    src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div>
                    <h4 className="text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600">
                      - 17%
                    </h4>
                  </div>
                  <div className="px-4 py-4 mt-4 inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
                    <div className="font-bold text-xl  text-blue-900 ">
                      <Rating
                        className="text-orange-600   "
                        initialRating={"3"}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      ></Rating>
                      <h4> Hand Sanitizer</h4>
                      <h4 className="text-base text-stone-600 mr-2">
                        $25.00{" "}
                        <spn className="line-through text-stone-600 opacity-75 text-base font-normal">
                          $30.00
                        </spn>
                      </h4>
                      <p className="text-gray-700 text-base font-normal mt-2 opacity-50">
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
                  <img
                    className="w-full h-72   object-cover static "
                    src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div>
                    <h4 className="text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600">
                      - 17%
                    </h4>
                  </div>
                  <div className="px-4 py-4 mt-4 inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
                    <div className="font-bold text-xl  text-blue-900 ">
                      <Rating
                        className="text-orange-600   "
                        initialRating={"3"}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      ></Rating>
                      <h4> Hand Sanitizer</h4>
                      <h4 className="text-base text-stone-600 mr-2">
                        $25.00{" "}
                        <spn className="line-through text-stone-600 opacity-75 text-base font-normal">
                          $30.00
                        </spn>
                      </h4>
                      <p className="text-gray-700 text-base font-normal mt-2 opacity-50">
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="    bg-gradient-to-r from-sky-200 to-indigo-300 ">
              <div className=" border-2 py-6 px-4 ">
                <h3 className="text-2xl font-medium my-2">Order Summary</h3>
                <div className="flex items-center justify-between">
                  <h3>Items:</h3>
                  <h3>Pcs: 5</h3>
                </div>
                <hr />
                <div className="flex items-center justify-between mt-4">
                  <h3>Total Cost:</h3>
                  <h3>USD: 100.00</h3>
                </div>
                <hr />
                <div className="flex items-center justify-between mt-4">
                  <h3>Shipping:</h3>
                  <h3>USD: 15</h3>
                </div>
                <hr />
                <div className="flex items-center justify-between mt-4">
                  <h3>Tax:</h3>
                  <h3>USD: 12</h3>
                </div>
                <hr />
                <div className="flex items-center justify-between mt-4">
                  <h3 className="text-xl">Total Price:</h3>
                  <h3>USD: 00.00</h3>
                </div>
                <div className="text-center">
                  <button className="text-xl py-2 px-3 w-full mt-10 mb-6 bg-slate-800 text-white">
                    Next
                  </button>
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

export default Shop;
