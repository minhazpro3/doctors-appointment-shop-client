/* eslint-disable no-unreachable */
import { axios } from 'axios';
import { useEffect } from 'react';
  
 const initialState = {
    cart:[]   
 }
 

const HandleCart = (state=initialState, action) => {
    const product = action.payload;
     console.log(product);
    



    switch (action.type) {
        case "ADDITEM":

        const itemIndex = state.cart.findIndex(item=>item._id===action.payload._id);
        if(itemIndex >=0){

            state.cart[itemIndex].qty += 1
        }
        else {
            const newCart = {...action.payload, qty:1}
            
               
             
        
               
             return{
                ...state,
                cart:[...state.cart, newCart]
            }
        }

           

            // eslint-disable-next-line no-fallthrough
            case "DELITEM" :
                let datas = state.cart.filter((e)=>e._id !== action.payload)
                return {
                   ...state,
                   cart:datas
                }


                case "REMOVE_ONE":
                    const itemIndex_dec = state.cart.findIndex(item=>item._id===action.payload._id);
                if(state.cart[itemIndex_dec].qty >= 1){
                    const dltItem = state.cart[itemIndex_dec].qty -=1 
                    console.log([...state.cart, dltItem]);

                    return {
                        ...state,
                        cart:[...state.cart,]
                    }
                }
                else if(state.cart[itemIndex_dec].qty === 1){
                    let datas = state.cart.filter((e)=>e._id !== action.payload)
                    return {
                       ...state,
                       cart:datas
                    }
    
                }

                
            
        


    
        // eslint-disable-next-line no-fallthrough
        default:
           return state;
    }
}

export default HandleCart;


// const handleAddToCart = (selectedProduct) =>{
//     console.log(selectedProduct);
//     let newCart = [];
//     const exists = cart.find(product => product._id === selectedProduct._id);
//     if(!exists){
//         selectedProduct.quantity = 1;
//         newCart = [...cart, selectedProduct];
//     }
//     else{
//         const rest = cart.filter(product => product._id !== selectedProduct._id);
//         exists.quantity = exists.quantity + 1;
// newCart = [...rest, exists];
//     }
    
//     setCart(newCart);
//     addToDb(selectedProduct._id);
// }