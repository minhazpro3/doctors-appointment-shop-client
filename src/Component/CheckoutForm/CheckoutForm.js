import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

const CheckoutForm = ({ totalPrice, deleteMany }) => {
  const stripe = useStripe();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const elements = useElements();

  const showNot = () => {
    setSuccess("Payment success");
    setTimeout(() => {
      setSuccess("");
    }, 10000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://doctors-appointmentandshop-yw1u.onrender.com/payment",
          {
            amount: { totalPrice },
            email: "",
            id,
          }
        );
        if (response.data.success) {
          Swal.fire("Wow !", "Payment Success ", "success");
          showNot();
          deleteMany();
          setCardError("");
        }
      } catch (error) {
        console.log("ERROR:", error.message);
        setCardError(error.message);
        setSuccess("");
      }
    } else {
      console.log(error.message);
      setCardError(error.message);
      setSuccess("");
    }
  };
  return (
    <>
      <form className="bg-indigo-200 py-6 px-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#a83",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            className={` ${
              success ? "bg-green-600" : "bg-red-600"
            }  text-white px-5 py-2 text-base font-bold my-6 rounded-full active:bg-red-600 hover:bg-indigo-900 shadow-lg shadow-red-400`}
            type="submit"
            disabled={!stripe}
          >
            Pay Confirm {totalPrice} $
          </button>
        </div>
      </form>

      {cardError && (
        <p className=" text-base text-red-600 font-medium py-2 px-5 text-center">
          {cardError}
        </p>
      )}
      {success && (
        <p className=" text-base text-green-600 font-medium py-2 px-5 text-center">
          {success}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
