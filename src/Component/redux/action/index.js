
// add item to cart
export const addItem = (product)=>{

    return {
        type: "ADDITEM",
        payload: product
    }
}

// dedete item to cart
export const deleteItem = (product)=>{

    return {
        type: "DELITEM",
        payload: product
    }
}