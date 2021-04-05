import React, { useContext } from 'react';
import './Product.css';
import { productsContext } from '../../App';

const Product = (props) => {
    const products = useContext(productsContext);

    const product = products.find(e => e.id === props.match.params.id )
    console.log(product)
    return (
        <div className="Product">
           <h3>{product.name}</h3> 
           <div>
                <img src={product.image} alt="img"/>
                <p>{product.price}</p>
           </div>
           <p>{product.description}</p>
        </div>
    )
}

export default Product;