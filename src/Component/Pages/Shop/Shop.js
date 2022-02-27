import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="flex justify-center ">
          <div className="w-80 hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
            <img
              className="w-full h-72  object-cover static  "
              src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/products/1.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-4 py-4  inline-block  bg-white duration-500 rounded-tl-lg rounded-tr-lg showDIv">
              <div className="font-bold text-xl  text-blue-900">
                Dr. Marvin Robbins
              </div>
              <div className="font-bold text-base mb-2 opacity-50">
                Cardiology{" "}
              </div>
              <p className="text-gray-700 text-base mt-14 opacity-50">
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
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
