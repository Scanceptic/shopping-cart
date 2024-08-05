import basket from "./assets/shopping-cart.svg"

const Basket = () => {
    let items = 0;
    let cost = 0;
    return (
      <>
        
            <div id="shopping-basket">
                <a href="">
                    <img src={basket} alt="Shop"></img>
                </a>  
                <p className="bold">{items} items</p>
                <p className="bold">£{cost}</p>
            </div>
        
      </>
    )
  }
  
  export default Basket