/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import useAuth from '../../hooks/useAuth';
import SaveCartItems from './SaveCartItems';


const SaveCart = () => {
  const [items, setItems]=useState([])  
  const [totalPrice, setTotalPrice]=useState(0)
      

        const total = ()=>{
          let price = 0;
          items.map(ele => {
            price=parseInt(ele.discountPrice) * parseInt(ele.qty) + parseInt(price)
          })
          setTotalPrice(price)
        }
      useEffect(()=>{
        total()
      },[total])
        


        const send = (e)=>{
          
           const item = {
            discountPrice:e.discountPrice,
            image:e.image,
            name:e.name,
            rating:e.rating,
            _id:e._id,
            qty:0
           }
          const itemIndex = items.filter(item=>item._id===e._id);
      
          if(itemIndex[0]){
          
           axios.put(`http://localhost:5000/updatePQty`,item)
           .then(res=>{
             console.log(res.data);
             if(res.data){
              total()
             }
           })
           .catch(err=>{
            })
         
          }
          else {
           
            axios.post("http://localhost:5000/saveCart",(item))
            .then(res=>{
                if(res.data){
                  total()
                }
                
              })
              .catch(err=>{
              })
          }
        }


        const remove = (e)=>{
          const item = {
            _id:e._id,
            type:"Dec"
          }
          axios.put(`http://localhost:5000/updatePQty`,item)
          .then(res=>{
            console.log(res.data);
          })
          .catch(err=>{
            console.log(err.message);
           })
        }

        const handleDelete = (id)=>{
          axios.delete(`http://localhost:5000/deleteProd/${id}`)
          .then(res=>{
            console.log(res.data);
            if(res.data){
              setItems(items.filter(product => product._id !== id))
            }
          })
          .catch(err=>{
            console.log(err.message);
           })
        }




     useEffect(() => {
    fetch("http://localhost:5000/getCart")
      .then((res) => res.json())
      .then((data) => {
       setItems(data)
      });
  }, [total]);



    return (
        <div >
           
            <div className="relative">
                <h4 className="text-center text-3xl mt-4">Save Products</h4>
                <h4 className="bg-orange-400 py-4"></h4>
            </div>

            <div className="container mx-auto">
                
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
                          Delete
                        </th>
                      </tr>
                    </thead>
                    {items.map((prod, index) => (
                      <SaveCartItems
                        key={index}
                        prod={prod}
                        // patient={patient}
                        index={index}
                        send={send}
                        remove={remove}
                        // updateStatus={updateStatus}
                        handleDelete={handleDelete}
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