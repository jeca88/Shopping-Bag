import React, {useState} from 'react';
import './Item.css';


const Item = ({item, index,  removeItem, calculatePrice}) => {
   
    const setQuantityOfCart = (value) => {
        value = value < 0 ? 0 : value;
        value = value > 99 ? 99 : value;
      item.quantity = Number(value); 
      calculatePrice();
     
    }
  
    return (
        <div className="item">   
            <div className="checkout-content">
            <div className="card">
                    <h3>{item.article.name}</h3>
                    <img src={item.article.image} alt="img" />
                    <p>{item.article.price}</p>
                    <div className='checkout-controls'>
                         <button className='remove' onClick={()=> removeItem(index)}>Remove From Cart</button>
                         <div>
                            <button className='checkout-prev' onClick={() => setQuantityOfCart(item.quantity - 1)}>-</button>
                            <input type='text' value={item.quantity} onChange={e=> setQuantityOfCart(e.target.value)}/>
                            <button className='checkout-next' onClick={() => setQuantityOfCart(item.quantity + 1)}>+</button>
                        </div>
                    </div> 
                    <p>{item.quantity}</p>
                    </div>
            </div>
        </div>
    )
}

export default Item;