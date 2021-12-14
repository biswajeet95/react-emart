///For Add Item to Cart

export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }
}

//For Delete Item   For Cart
export const deCart = (product) => {
    return{
        type:"DELITEM" ,
        payload : product
    }
}