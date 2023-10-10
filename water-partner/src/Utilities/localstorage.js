//find local store item, if get return with JSON, else []
const getStoreCart = () =>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return[];
}
//store item
const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
//
const addToLS = id =>{
    const cart = getStoreCart();
    cart.push(id);
    //save to local storage
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoreCart();
    //removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export{addToLS, getStoreCart, removeFromLS}