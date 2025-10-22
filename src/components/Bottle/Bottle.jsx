import React from 'react';
import './bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { img, name, seller, ratingsCount } = bottle;
    console.log( )
    

    return (
        <div className='card-bottle'>
            <img className='bottle-card' src={img} alt="" />
            <h2>{name}</h2>
            <p>Brand: {seller}</p>
            <p>Price: ${bottle.price}</p>

            <p>Rate:⭐ {ratingsCount}</p>
            <button onClick={ () => {handleAddToCart(bottle)}} className='btn'>Buy Now</button>
        </div>
    );
};

export default Bottle;