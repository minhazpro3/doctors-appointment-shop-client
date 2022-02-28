import React from "react";
import Rating from "react-rating";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="flex justify-center ">
          <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
            <img
              className="w-full h-72   object-cover static "
              src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
              alt="Sunset in the mountains"
            />
            <div>
              <h4 className="text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600">
                -17%
              </h4>
            </div>
            <div className="px-4 py-4  inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
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
                <p className="text-gray-700 text-base font-normal mt-6 opacity-50">
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
  );
};

export default Shop;
