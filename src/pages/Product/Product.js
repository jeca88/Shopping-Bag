import React, { useContext } from 'react';
import './Product.css';
import { productsContext } from '../../App';

const Product = (props) => {
    const products = useContext(productsContext);

    const product = products.find(e => e.id === props.match.params.id )
    if(!product) {
        return null;
    }
    return (
        <div className="Product">
           <h3>{product.name}</h3> 
           <div className='product-content'>
                <img src={product.image} alt="img"/>
                <p><b>Price:</b> {product.price}</p>
           </div>
           <p><b>Description:</b> {product.description}</p>
        </div>
    )
}

export default Product;