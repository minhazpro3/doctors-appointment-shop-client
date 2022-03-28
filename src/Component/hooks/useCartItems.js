import React, { useState } from 'react';
import useAuth from './useAuth';

const useCartItems = () => {

    const {user}=useAuth()
    const [cartData,setCartData]=useState([])
    console.log(cartData.length);
    

    const addCart = (item)=>{
        setCartData([...cartData,item])

        //     console.log(item)

        //     const data =  {
        //         _id:item._id,
        //         discountPrice:item.discountPrice,
        //         image:item.image,
        //         name:item.name,
        //         quantity:0,
        //         email:user.email
        //     }

        // fetch("http://localhost:5000/cartSave",{
        //     method: "POST",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })

    }




    return {
        addCart
    }
};

export default useCartItems;