/* eslint-disable no-unreachable */
 
 const cart = []

const HandleCart = (state=cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // check if product already exist 
            if(state.qty>0){
                return state.map((x)=> x._id === product._id&& {...x, qty: x.qty + 1}  )

            }
            else{
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product, qty: 1
                    }
                ]
            }
            
            break;

            case "DELITEM":
            const exist1 = state.find((x,index)=> x._id === product._id)
            if(exist1.qty===1){
                return state.filter((x)=> x._id!==product._id)
            }
            else{
                return state.map((x)=> x._id === product._id ? {...x, qty: x.qty-1}: x)
            }
            break;
    
        default:
            return state
            break;
    }
}

export default HandleCart;