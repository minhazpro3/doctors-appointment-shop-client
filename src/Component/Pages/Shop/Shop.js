/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Shop.css";
import med2 from "../../Images/med-2.png";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import ShopItems from "../ShopItems/ShopItems";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState(Number);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://doctors-appointmentandshop-yw1u.onrender.com/getProductCart")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const total = () => {
    let price = 0;
    items.map((ele) => {
      price = parseInt(ele.discountPrice) * parseInt(ele.qty) + parseInt(price);
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    fetch(
      `https://doctors-appointmentandshop-yw1u.onrender.com/getCart/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {});
  }, [total]);

  const send = (e) => {
    const item = {
      email: user.email,
      discountPrice: e.discountPrice,
      image: e.image,
      name: e.name,
      rating: e.rating,
      id: e._id,
      qty: 1,
      type: "product",
    };

    const itemIndex = items.filter((item) => item.id === e._id);
    if (itemIndex[0]) {
      const newItem = itemIndex[0];
      axios
        .put(
          `https://doctors-appointmentandshop-yw1u.onrender.com/updatePQty`,
          newItem
        )
        .then((res) => {
          setSingleItem(singleItem + 1);
          if (res.data) {
          }
        })
        .catch((err) => {});
    } else {
      axios
        .post(
          "https://doctors-appointmentandshop-yw1u.onrender.com/saveCart",
          item
        )
        .then((res) => {
          if (res.data) {
          }
        })
        .catch((err) => {});
    }
  };

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
            {!products.length ? (
              <div className="text-center text-3xl">
                <svg
                  role="status"
                  className="inline mr-2 w-20 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
                {products.map((product, index) => (
                  <ShopItems
                    key={product._id}
                    product={product}
                    send={send}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
          <div className=" ">
            <div className="    bg-gradient-to-r from-sky-200 to-indigo-300 ">
              <div className=" border-2 py-6 px-4 ">
                <h3 className="text-2xl font-medium my-2">Order Summary</h3>
                <div className="flex items-center justify-between">
                  <h3>Items:</h3>
                  <h3> {items?.length} </h3>
                </div>
                <hr />

                <div className="flex items-center justify-between mt-4">
                  <h3 className="text-xl">Total Price:</h3>
                  <h3>USD {totalPrice} </h3>
                </div>
                <div className="text-center">
                  <NavLink to="/saveCart">
                    <button className="text-xl py-2 px-3 w-full mt-10 mb-6 bg-slate-800 text-white">
                      Cart
                    </button>
                  </NavLink>
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
