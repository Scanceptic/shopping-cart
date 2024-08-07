import { useState } from "react";
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ShopItem from './ShopItem';

const Shopping = () => {
  
  // create state for list of basket items
  const [basketItems, setBasketItems] = useState([]);

  // add new item to basket
  function addItemToBasket(item) {
    // copy current basket with new item added
    const newBasket = [...basketItems, item];
    // set basket to new basket
    setBasketItems(newBasket);
  }

  return (
    <>
      < Navbar basketItems={basketItems}/>
      <div className="content shopping">
        <div className="heading">
          <h1>Shopping</h1>
          <p>
            This is the shopping page of the app - add products to your basket and checkout when ready.
          </p>
          <p>
            There are links to the home page and the shopping cart page above.
          </p>
        </div>
        <div id="shopping-browser">
          <ShopItem addItemToBasket={addItemToBasket}/>
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Shopping
