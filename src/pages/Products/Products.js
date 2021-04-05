import React, { useContext } from 'react';
import './Products.css';
import Card from '../../components/Card/Card';

import { productsContext } from '../../App';
import { cartContext } from '../../App';

const Products = () => {
    const products = useContext(productsContext);
    const { addToCart } = useContext(cartContext);

    

    const card = products.map(card => {
        return <Card product={card} addToCart={addToCart} />
    })
    return (
        <div className="Products">
            {card}
        </div>
    )
}

export default Products;