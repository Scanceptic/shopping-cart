import PropTypes from 'prop-types';
import typewriter from "./assets/typewriter.jpg";

const ShopItem = ({ addItemToBasket, name, cost, image=typewriter }) => {
    
    const item = { name, cost};

    return (
        <div className='shop-item'>
            <p>{item.name}</p>
            <p>{"£"+(item.cost).toFixed(2)}</p>
            <img src={image}></img>
            <div className='basket-container'>
                <button className='add-to-basket' onClick = {(event) => {
                    const inputElement = event.target.parentElement.querySelector('.item-quantity');
                    const quantity = parseInt(inputElement.value) || 0;
                    if (quantity > 0) {
                        addItemToBasket(item, quantity);
                    } else {
                        console.warn("Please enter a valid quantity");
                    }
                }}>Add to Basket</button>
                <input className='item-quantity' type='number' min={1} placeholder='1' defaultValue={1}></input>
            </div>
        </div>
    )
}

ShopItem.propTypes = {
    addItemToBasket: PropTypes.func,
    name: PropTypes.string,
    cost: PropTypes.number,
    image: PropTypes.string,
};

export default ShopItem;