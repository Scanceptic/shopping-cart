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
// FAKE STORE API DOWN @ 14:49 08/08/2024
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
          console.log(item);
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
  //console.log(shopItems);
  // push the titles and prices for each item to a new ShopItem component
  const localItems = [];
  if (shopItems.loading) {
    console.log("loading...")
  } else if (!shopItems.loading) {
    console.log("Loaded Items:");
    console.log(shopItems);
    for (let i=0; i<shopItems.items.length; i++) {
      // TODO - FIX PROPS ASSIGNMENT TO SHOPITEMS
      localItems.push(<ShopItem addItemToBasket={addItemToBasket} name={shopItems.items[i].title} cost={shopItems.items[i].price}/>);
    }
    console.log("Local Items:");
    console.log(localItems);
    // make a list of items for if no fake store data is available
    if (localItems.length === 0) {
      for (let i=0; i<6; i++) {
        localItems.push(<ShopItem addItemToBasket={addItemToBasket} name={"Typewriter Version " + Math.floor(2 + i * Math.random() * 12)} cost={"£" + Math.floor(300+i*100*Math.random())}/>)
      }
    }
  }
  
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
          {!shopItems.loading && localItems}
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Shopping
