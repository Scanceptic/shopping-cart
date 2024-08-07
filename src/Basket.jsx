/* eslint-disable react/prop-types */
import basket from "./assets/shopping-cart.svg"

const Basket = ({ basketItems }) => {
  const numberOfItems = basketItems.length;
  const basketCost = basketItems.reduce((total, item) => total + item.cost, 0);

  return (
    <>
      <div id="shopping-basket">
        <a href="">
            <img src={basket} alt="Shop"></img>
        </a>  
        <p className="bold">{numberOfItems || 0} items</p>
        <p className="bold">£{basketCost.toFixed(2)}</p>
      </div>
    </>
  )
}
  
export default Basket;