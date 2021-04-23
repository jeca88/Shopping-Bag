import React, { useState } from 'react';
import './Card.css';
import {  Link } from 'react-router-dom';

const Card = (props) => {
    const { product, addToCart } = props;
    const [quantity, _setQuantity] = useState(1);
    

    const setQuantity = (value) => {
        if (value === "") {
            _setQuantity("");
        } else {
            value = Number(value);
            if (isNaN(value)) return
            value = value < 0 ? 0 : value;
            value = value > 99 ? 99 : value;
            _setQuantity(value)
        }


        _setQuantity(value);
       
    };
    return (
        <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt="img"/>
            <p>{product.price}</p>
            <Link className="details-btn" to={`/products/${product.id}`}>Details</Link>
            <div className='controls'>
                <button className='prev' onClick={() => setQuantity(quantity - 1)}>-</button>
                <input type='text' value={quantity} pattern="[^0-9]*" onChange={(e) => setQuantity(e.target.value)} />
                <button className='next' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className='add-btn' onClick={() => addToCart(product, quantity)}>Add to card</button>
        </div>
    )
}

export default Card;