import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';



const stripePromise = loadStripe('pk_test_51Jw7VaH3ev5JLZVRvA8lgx8YaHqTlusMziZgMjollIE1gPBWx3kP33OB2DK3Fnwpgr2YetIlBzzcMNbzw5Nxbm6T00ilgAiC9a');


const PayButton = ({ totalPrice, items, deleteMany }) => {
    return (
        <div className='bg-white text-black text-xl  py-2 '>
          
            <div className="hero min-h-md bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
     
  <div className="card w-96 bg-base-100 shadow-xl">
 
              <div className="card-body">
              <Elements  stripe={stripePromise}>
    <CheckoutForm deleteMany={deleteMany} totalPrice={totalPrice} />
  </Elements>
    
      </div>
</div>
  </div>
</div>
        </div>
    );
};

export default PayButton;