import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';

import { Switch, Route, Link, Redirect } from 'react-router-dom';

export const productsContext = React.createContext({})
export const cartContext = React.createContext({})
const { Provider: ProductsProvider } = productsContext;
const { Provider: CartProvider } = cartContext;




const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  
  const url = 'https://606565c8f0919700177875fb.mockapi.io/products';

  const addToCart = (article, quantity) => {
    setCart([...cart.filter(e => e.article.id !== article.id), { article, quantity }])

  }
 
  

  const removeItem = (index) => {
    const changedCart = [...cart]
    changedCart.splice(index, 1);
    setCart(changedCart);
  }


  const msgTotal = cart.reduce(function (prev, cur) {
    return prev + cur.quantity;
  }, 0);




  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data.map(e => ({ ...e, image: `https://loremflickr.com/320/240/${e.name}?lock=1` }))
      ));
  }, []);
  console.log(products)

  return (

    <div className="App">
      <div>
        <Link className="pageBtn" to='/products'>Products</Link>
        <Link className="pageBtn" to='/checkout'>Go To Cart ({msgTotal})</Link>
      </div>
      <ProductsProvider value={products}>
        <CartProvider value={{ cart, addToCart, removeItem }}>
          < Switch>
            <Route path='/products/:id' component={Product}></Route>
            <Route path='/products' component={Products}></Route>
            <Route path='/checkout' component={Checkout}></Route>
            <Redirect from="/" to="/products"></Redirect>
          </Switch>
        </CartProvider>
      </ProductsProvider>

    </div>

  );

}

export default App;
