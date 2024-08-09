import { useEffect, useState } from "react";
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ShopItem from './ShopItem';

// fetch fake store API data
const useStoreItems = () => {
  console.log("useStoreItems called");
  // create fetchedItems state - items, error status, loading status
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
        // for each item in the response, push some properties to a new array
        fetchedItems.push({name: item["title"], cost: item["price"], image: item["image"], id: item["id"],});
      }))
      .then(() => setItems(fetchedItems))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { items, error, loading };
};

const Shopping = () => {
  
  // create state for list of basket items
  const [basketItems, setBasketItems] = useState([]);
  // add new item to basket
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function addItemToBasket(item, quantity) {
    console.log("addItemToBasket called");
    const newItems = [];
    // copy current basket with new item added
    for (let i=0; i<quantity; i++) {
      newItems.push(item);
    }
    const newBasket = basketItems.concat(newItems);
    // set basket to new basket
    setBasketItems(newBasket);
  }

  // fetch API shop items
  const shopItems = useStoreItems();
  // create state for local items to trigger re-render on change
  const [localItems, setLocalItems] = useState([]);

  // Use useEffect to update localItems once shopItems have finished loading
  useEffect(() => {
    if (!shopItems.loading && shopItems.items) {
    console.log("setLocalItems called");
    // set state for local items
    setLocalItems(shopItems.items.map((item) => {
      // for each shop item, construct a react element
      return <ShopItem addItemToBasket={addItemToBasket} name={item.name} cost={item.cost} image={item.image} key={item.id}/>
    }));
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [shopItems.items, shopItems.loading]);
  
  // render the collection of ShopItems using JSX in the Shopping component
  return (
    <>
      < Navbar basketItems={basketItems}/>
      <div className="shopping">
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
          <ShopItem addItemToBasket={addItemToBasket} name="Typewriter Generic" cost={44} />
          {!shopItems.loading && localItems}
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Shopping
