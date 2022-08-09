/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import SaveCartItems from './SaveCartItems';


const SaveCart = () => {
  const {user}=useAuth()
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
            id:e.id,
            qty:0
           }
          const itemIndex = items.filter(item=>item.id===e.id);
      
          if(itemIndex[0]){
          
           axios.put(`https://aqueous-stream-06459.herokuapp.com/updatePQty`,item)
           .then(res=>{
             if(res.data){
              total()
              if(res.data){
              
                Swal.fire("Increase success!", "Increase Quantity ", "success");
              }
             }
           })
           .catch(err=>{
            })
         
          }
          else {
           
            axios.post("https://aqueous-stream-06459.herokuapp.com/saveCart",(item))
            .then(res=>{
                if(res.data){
                  total()
                  if(res.data){
              
                    Swal.fire("Added success!", "Product Added to Cart", "success");
                  }
                }
                
              })
              .catch(err=>{
              })
          }
        }


        const remove = (e)=>{
          const item = {
            id:e.id,
            type:"Dec"
          }
          axios.put(`https://aqueous-stream-06459.herokuapp.com/updatePQty`,item)
          .then(res=>{
            if(res.data){
              Swal.fire("Decrease success!", "Decrease Quantity ", "success");
            }
            
          })
          .catch(err=>{
           })
        }

        const handleDelete = (id)=>{
          Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to cancel !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your Product has been Canceled.',
                'success'
              )
              axios.delete(`https://aqueous-stream-06459.herokuapp.com/deleteProd/${id}`)
              .then(res=>{
                if(res.data){
                  setItems(items.filter(product => product._id !== id))
                 
                }
              })
              .catch(err=>{
               })

            }
          })
         
        }




        useEffect(() => {
          fetch(`https://aqueous-stream-06459.herokuapp.com/getCart/${user?.email}`)
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
                    {!items.length?<div className='flex justify-center'>
                    <h3 className='text-3xl '>Cart is Empty</h3>
                   
                    </div>:items.map((prod, index) => (
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
            <Footer/>
        </div>
    );
};

export default SaveCart;