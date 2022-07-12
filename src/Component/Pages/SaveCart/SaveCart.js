/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from '../../redux/action';
import SaveCartItems from './SaveCartItems';


const SaveCart = () => {
  const [totalPrice, setTotalPrice]=useState(0)
    const state = useSelector(state=>state.HandleCart)
      const dispatch = useDispatch()
        const {cart}=state
       

        const total = ()=>{
          let price = 0;
          state.cart.map(ele => {
            price=parseInt(ele.discountPrice) * parseInt(ele.qty) + parseInt(price)
          })
          setTotalPrice(price)
        }
      
        useEffect(()=>{
          total();
        },[total])


        const send = (e)=>{
          console.log(e);
           const items = {
            discountPrice:e.discountPrice,
            image:e.image,
            name:e.name,
            rating:e.rating,
            _id:e._id,
            qty:0
           }
          dispatch(addItem(items))
        }


        const remove = (e)=>{
          dispatch(removeItem(e))
        }



    return (
        <div >
            {/* {cart.map(pd=>
            <div key={pd.qty}>
                <h4>{pd.name}</h4>
            </div>)} */}
            <div className="relative">
                <h4 className="text-center text-3xl mt-4">Save Products</h4>
                <h4 className="bg-orange-400 py-4"></h4>
            </div>

            <div className="container mx-auto">
                    {/* <div>
                        <SaveCartItems/>
                    </div> */}
                    <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-orange-300">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          SL
                        </th>
                       
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Products
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Tittle
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Id
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    {cart.map((prod, index) => (
                      <SaveCartItems
                        key={index}
                        prod={prod}
                        // patient={patient}
                        index={index}
                        send={send}
                        remove={remove}
                        // updateStatus={updateStatus}
                        // handleDelete={handleDelete}
                      />
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
            </div>
           <div className="container mx-auto absolute right-32 top-24 pt-3 text-lime-50  ">
           <div className="grid justify-items-end mx-12 px-6 mb-16">
              <h4 className="font-bold">Total price:  {totalPrice  } USD</h4>
            </div>
           </div>
            
        </div>
    );
};

export default SaveCart;