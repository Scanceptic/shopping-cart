import { useEffect, useState } from "react";
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
  const useStoreItems = () => {
    // create fetchedItems state
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchedItems = [];
      // send fetch request to API
      fetch('https://fakestoreapi.com/products?limit=5', { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => response.map((item) => {
          fetchedItems.push({name: item["title"], cost: item["price"],});
        }),
        setItems(fetchedItems),
        )
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
    return { items, error, loading };
  };

  const shopItems = useStoreItems();
  console.log(shopItems);
  // push the titles and prices for each item to a new ShopItem component

  // render the collection of ShopItems using JSX in the Shopping component
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
          <ShopItem addItemToBasket={addItemToBasket} name={"Typewriter"} cost={999}/>
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Shopping
