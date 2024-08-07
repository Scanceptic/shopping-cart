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

  // fetch fake store API data
  function fetchStoreAPI() {
    // create array
    const fetchedItems = [];
    // send fetch request to API
    fetch('https://fakestoreapi.com/products?limit=5', { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => fetchedItems.push(response))
      .catch((error) => console.log(error))
      .finally(() => console.log("loaded"));
    // push names (title) and costs (price) to array
    // return array
    return fetchedItems;
  }
  const shopItems = fetchStoreAPI();

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
          {/* for each item in store array, create new ShopItem component here */}
          <ShopItem addItemToBasket={addItemToBasket} name={shopItems[0].name} cost={shopItems[0].cost}/>
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Shopping
