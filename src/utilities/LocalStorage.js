//***
// 1. to get something from local storage , you will get it as a string
/**
 * 2. convert this to javascript object / array
 * 
 */

 


const getCartFromLocalStorage = () => {
    const storeCartString = localStorage.getItem('cart');
    if (storeCartString) {
        const storeCart = JSON.parse(storeCartString);
        return storeCart;
    }
    return [];
}

const saveCartFromLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart); //string a convert...
    localStorage.setItem('cart', cartStringified)
}

const addItemCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];

    //save new cart to the local storage
    saveCartFromLocalStorage(newCart);
}

const removeFromLocalStorage = id =>{
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartFromLocalStorage(remainingCart);
}

export {
    getCartFromLocalStorage as getStoreCart,
    addItemCartLocalStorage as addToStoreCart, 
    removeFromLocalStorage as removeFromCart
};