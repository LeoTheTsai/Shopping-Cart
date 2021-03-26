import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import './App.css';


function App() {

  const slide = () =>{
    const features = document.querySelector(".cart-items");
    const check_out = document.querySelector(".checkout");
    features.classList.toggle("cart-items-active");
    check_out.classList.toggle("checkout-active");
  }

  const check_out_clear = () => {
    const price = document.querySelector(".checkout-price");
    const tax = document.querySelector(".tax");
    const total = document.querySelector(".net-total");
    const cart = document.querySelector(".purchased-item");
    cart.querySelectorAll('*').forEach(n => (n.remove()));
   
    price.innerHTML = price.innerHTML.slice(0,7) + 0.00;
    tax.innerHTML = tax.innerHTML.slice(0,5) + 0.00;
    total.innerHTML = total.innerHTML.slice(0,7) + 0.00;
  }

  return (
      <Router>
        <div className = "grid">
          <nav>
              <div className="brand-link">
                <Link to="/">Forever 22</Link>
              </div>
              <button className = "cart" onClick={slide}>Cart</button>
              <div className="cart-items"> 
                <div className="checkout">
                    <h2>Cart</h2>
                      <ul className="purchased-item">
                      </ul>
                    <div className="calculate-total">
                        <div className="checkout-price">Price: 0.00</div>
                        <div className="tax">Tax: 0.00</div>
                        <div className="net-total">Total: 0.00</div>
                        <button onClick={check_out_clear} className="checkout-button" type = "submit">
                            Check Out
                        </button>
                    </div>
                </div>
              </div>
              
          </nav>

          <main className="main">
            <div className="shop-items">
              
            </div>
          
          </main>

          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
