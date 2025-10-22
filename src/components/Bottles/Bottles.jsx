import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart, removeFromCart } from '../../utilities/LocalStorage';
import Cart from '../cart/cart';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])
    const bottles = use(bottlesPromise);
    console.log(bottles);




    //useEffect
    useEffect(() => {
        const storedCartsIds = getStoreCart();
        //  console.log(storedCartsIds, bottles);

        const storedCart = [];

        for (const id of storedCartsIds) {
            console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log('store cart', storedCart);
        setCart(storedCart);


    }, [bottles])

    const handleAddToCart = (bottle) => {
        //console.log("add to cart", bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);

        addToStoreCart(bottle.id);


    }

    const handleRemoveFromCart = id => {
        console.log('remove item from the cart', id);

        const remainingCart = cart.filter(bottle => bottle.id != id);
        setCart(remainingCart);
        removeFromCart(id);
    }


    return (
        <div>

            <h3>Bottles : {bottles.length}</h3>
            <h2>Added card : {cart.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className='bottles-card'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;