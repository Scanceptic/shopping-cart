import { useEffect, useState } from "react";
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ShopItem from './ShopItem';

const Shopping = () => {
  
  // create state for list of basket items
  const [basketItems, setBasketItems] = useState([]);

  // add new item to basket
  function addItemToBasket(item, quantity) {
    const newItems = [];
    // copy current basket with new item added
    for (let i=0; i<quantity; i++) {
      newItems.push(item);
    }
    const newBasket = [...basketItems, newItems];
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
          //console.log(item);
          fetchedItems.push({name: item["title"], cost: item["price"], image: item["image"], id: item["id"],});
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
      localItems.push(<ShopItem addItemToBasket={addItemToBasket} name={shopItems.items[i].name} cost={shopItems.items[i].cost} image={shopItems.items[i].image} key={shopItems.items[i].id}/>);
    }
    console.log("Local Items:");
    console.log(localItems);
    // make a list of items for if no fake store data is available
    /* console.log("Local Items length:");
    console.log(localItems.length);
    if (localItems.length === 0 && !shopItems.loading) {
      console.log("No items, creating defaults");
      for (let i=0; i<6; i++) {
        localItems.push(<ShopItem addItemToBasket={addItemToBasket} name={"Typewriter Version " + Math.floor(2 + i * Math.random() * 12)} cost={Math.floor(300+i*100*Math.random())}/>)
      }
    } */
  }
  
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
