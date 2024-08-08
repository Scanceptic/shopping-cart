import PropTypes from 'prop-types';
import typewriter from "./assets/typewriter.jpg";

const ShopItem = ({ addItemToBasket, name, cost, image=typewriter }) => {
    
    const item = { name, cost};

    return (
        <div className='shop-item'>
            <p>{item.name}</p>
            <p>{"£"+item.cost}</p>
            <img src={image}></img>
            <div className='basket-container'>
                <button className='add-to-basket' onClick = {() => {
                    const inputElement = document.getEl
                    addItemToBasket(item)
                }}>Add to Basket</button>
                <input className='item-quantity' type='number' min={0} placeholder='0'></input>
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