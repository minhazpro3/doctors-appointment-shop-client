import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";

 
 
const ShopItems = ({ product, index }) => {
  const [items, setItems]=useState([])
  const [singleItem, setSingleItem]=useState(Number)

    const send = (e)=>{
       const item = {
        discountPrice:e.discountPrice,
        image:e.image,
        name:e.name,
        rating:e.rating,
        _id:e._id,
        qty:1
       }

      const itemIndex = items.filter(item=>item._id===e._id);
      if(itemIndex){

      }
      
       if(itemIndex[0]){
        setSingleItem(itemIndex[0].qty)
        axios.put(`http://localhost:5000/updatePQty`,item)
        .then(res=>{
          console.log(res.data);
          setSingleItem(singleItem + 1)
        })
        .catch(err=>{
          console.log(err.message);
         })
      
       }
       else {
        
         axios.post("http://localhost:5000/saveCart",(item))
         .then(res=>{
             console.log(res.data); 
             
           })
           .catch(err=>{
            console.log(err.message);
           })
       }
    }

    



    useEffect(() => {

       axios.get('http://localhost:5000/getCart')
          .then(res => {
              
              setItems(res.data)
             
          }) 

  }, [])

    

   

  return (
    <div className="flex justify-center ">
      <div className="w-80 relative hoverDIv h-[26rem] duration-1000 rounded border-2 overflow-x-hidden shadow-lg overflow-y-hidden">
        {!product.image ? (
          <div className="md:w-full h-96 text-center py-36  ">
            <svg
              role="status"
              className="text-center inline mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
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
          <img
            className="w-full h-72   object-cover static "
            src={product.image}
            alt="Sunset in the mountains"
          />
        )}
        <div>
          <h4
             className={
              !product.discount
                ? "hidden"
                : "text-base absolute top-0 text-white inline-block py-1 px-2 font-bold bg-orange-600"
            }
          >
            - {product.discount}%
          </h4>
        </div>
        <div className="px-4 py-4 mt-4 inline-block  bg-white duration-300 rounded-tl-lg rounded-tr-lg showDIv ">
          <div className="font-bold text-xl  text-blue-900 ">
            <Rating
              className="text-orange-600   "
              initialRating="5"
              readonly
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            ></Rating>
            <h4> {product.name}</h4>
            <h4 className="text-base text-stone-600 mr-2 ">
              ${product.discountPrice}.00{" "}
              <spn
                className={
                  !product.discountPrice
                    ? "hidden"
                    : "line-through text-stone-600 opacity-75 text-base font-normal"
                }
              >
                ${product.price}.00
              </spn>
            </h4>
            <p className="text-gray-700 text-base font-normal mt-2 opacity-50">
              {product.description}
            </p>
          </div>

          <div className="text-center">
            <button
               onClick={()=>send(product)}
              className="bg-slate-900 w-full text-white text-base font-medium my-2 py-3 rounded-xl hover:bg-sky-500"
            >
              Add To Cart
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
