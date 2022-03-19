import React from "react";
import { useForm } from "react-hook-form";
import AddProductsPic from "../../Images/add_products-removebg-preview.png";
import Footer from "../Footer/Footer";
import "./AddProducts.css";
import Swal from "sweetalert2"
 


const AddProducts = () => {
  const { register, handleSubmit, reset} = useForm();
  const onSubmit =   data => {
    
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('rating', data.rating)
    formData.append('price', data.price)
    formData.append('discountPrice', data.discountPrice)
    formData.append('discount', data.discount)
    formData.append('description', data.description)
    formData.append('image', data.image[0])

    const url = 'https://serene-atoll-01832.herokuapp.com/addProduct'
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
    

}

 

    

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
                    <option selected disabled className="opacity-25 ">
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
