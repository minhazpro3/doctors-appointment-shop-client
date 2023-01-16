import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddProductsPic from "../../Images/add_products-removebg-preview.png";
import Footer from "../Footer/Footer";
import "./AddProducts.css";
import Swal from "sweetalert2";
import axios from "axios";

const AddProducts = () => {
  const [imgUrl, setImgUrl] = useState();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData1 = {
      name: data.name,
      description: data.description,
      price: data.price,
      discount: data.discount,
      discountPrice: data.discountPrice,
      rating: data.rating,
      image: imgUrl,
    };

    axios
      .post(
        "https://doctors-appointmentandshop-yw1u.onrender.com/addProduct",
        formData1
      )
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire(
            "Good job!",
            "You Product added the Successfully!",
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
        if (res.data) {
          Swal.fire("Yaaa!", " Image uploaded!", "success");
          setImgUrl(res.data.data.url);
        }
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className="container mx-auto font-poppins-font my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              className="w-[420px] h-full"
              src={AddProductsPic}
              alt="add pic"
            />
          </div>
          <div className="flex justify-center">
            <div className=" w-[32rem] bg-white   shadow-2xl py-8 px-12">
              <h4 className="text-2xl text-blue-900 text-start mb-3 font-bold text-shadow-lg">
                Add New Product
              </h4>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="border-2 mt-2 border-black rounded-lg w-full py-2 px-2 focus:outline-blue-900	"
                    {...register("name")}
                    type="text"
                    placeholder="Product Name"
                    required
                  />
                  <br />
                  <input
                    className="border-2 mt-2 border-black rounded-lg w-full py-2 px-2 focus:outline-blue-900	"
                    {...register("description")}
                    type="text"
                    placeholder="Description"
                    required
                  />

                  <br />
                  <input
                    className="border-2 mt-2 border-black rounded-lg w-full py-2 px-2 focus:outline-blue-900	"
                    {...register("price")}
                    type="number"
                    placeholder="Regular Price"
                  />
                  <br />
                  <input
                    className="border-2 mt-2 border-black rounded-lg w-full py-2 px-2 focus:outline-blue-900	"
                    {...register("discount")}
                    type="number"
                    placeholder="Discount %"
                  />
                  <br />
                  <input
                    className="border-2 mt-2 border-black rounded-lg w-full py-2 px-2 focus:outline-blue-900	"
                    {...register("discountPrice")}
                    type="number"
                    placeholder="Discount Price"
                    required
                  />
                  <br />
                  <select
                    className="border-2 mt-2 border-black rounded-lg w-full py-2 px-2 focus:outline-blue-900	"
                    {...register("rating")}
                    placeholder=""
                    required
                  >
                    <option disabled className="opacity-25 ">
                      Set Rating
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <br />
                  <input
                    className="border-2 mt-2 border-black rounded-lg w-full  focus:outline-blue-900	"
                    {...register("image")}
                    type="file"
                    accept="image/*"
                    placeholder=""
                    required
                    onChange={setImage}
                  />
                  <br />

                  <input
                    className="border-2 mt-2 cursor-pointer text-white bg-sky-900 hover:bg-orange-500 border-black rounded-lg w-full py-2 px-2"
                    placeholder=""
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProducts;
