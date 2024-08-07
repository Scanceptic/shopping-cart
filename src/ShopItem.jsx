import PropTypes from 'prop-types';

const ShopItem = ({ addItemToBasket, name, cost }) => {
    
    const item = { name, cost};

    return (
        <div className='shopItem'>
            <p>{item.name}</p>
            <p>{item.cost}</p>
            <button onClick = {() => addItemToBasket(item)}>Add to Basket</button>
        </div>
    )
}

ShopItem.propTypes = {
    addItemToBasket: PropTypes.func,
    name: PropTypes.string,
    cost: PropTypes.number,
};

export default ShopItem;