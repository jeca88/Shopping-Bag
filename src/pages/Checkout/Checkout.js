import React, { useContext, useEffect, useState } from 'react';
import Item from '../../components/Item/Item';
import './Checkout.css';


import { cartContext } from '../../App';

const Checkout = () => {
    const {cart, removeItem} = useContext(cartContext);
    const [totalPrice, setTotalPrice] = useState(0);
   
    const calculatePrice = () => {
        const sumPrices = cart.reduce(function (acc, cur) {
            return (cur.article.price)*(cur.quantity) + acc;  
        }, 0);
        setTotalPrice(sumPrices);
    }


    useEffect(() => {
        calculatePrice();
    },[cart])
   
    

    const item = cart.map((cart, index) => {
        return <Item item={cart} index = {index} removeItem={removeItem} calculatePrice={calculatePrice}/>
    })
   

    return (
        <div className="Checkout">
            <h3>Total price: {totalPrice.toFixed(2)}</h3>
            <div className="checkout-list">
                {item}
            </div>
           
        </div>
    )
}

export default Checkout;