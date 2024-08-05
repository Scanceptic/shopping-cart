import { useState } from "react";
import basket from "./assets/shopping-cart.svg"

const Basket = (item) => {
  // add new item to basket
  const [basketItems, setBasketItems] = useState({ items: []})
  // create new basket with current items
  const newBasket = { ...basketItems };
  // concatenate new item to basket
  newBasket.concat(item);
  // set basket to new basket
  setBasketItems(newBasket);

  let numberOfItems = basketItems.length;
  let cost = 0;

  for (let i=0; i<numberOfItems; i++) {
    cost += basketItems[i].cost;
  }

  return (
    <>
      <div id="shopping-basket">
        <a href="">
            <img src={basket} alt="Shop"></img>
        </a>  
        <p className="bold">{numberOfItems || 0} items</p>
        <p className="bold">£{cost}</p>
      </div>
    </>
  )
}
  
export default Basket