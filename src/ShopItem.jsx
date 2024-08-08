import PropTypes from 'prop-types';
import typewriter from "./assets/typewriter.jpg";

const ShopItem = ({ addItemToBasket, name, cost, image=typewriter }) => {
    
    const item = { name, cost};

    return (
        <div className='shop-item'>
            <p>{item.name}</p>
            <p>{"£"+item.cost}</p>
            <img src={image} height={"50%"}></img>
            <button onClick = {() => addItemToBasket(item)}>Add to Basket</button>
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