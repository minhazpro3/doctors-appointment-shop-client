import React, { useContext } from 'react';
import { cartContext } from './contexApi/CartProvider';

const useCart = () => {
    return useContext(cartContext)
};

export default useCart;