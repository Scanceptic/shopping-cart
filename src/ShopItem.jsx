/* eslint-disable react/prop-types */
const ShopItem = ({ addItemToBasket }) => {
    
    const item = { name: "1894 Typewriter", cost: 189 };

    return (
        <div>
            <p>{item.name}</p>
            <p>{item.cost}</p>
            <button onClick = {() => addItemToBasket(item)}>Add to Basket</button>
        </div>
    )
}

export default ShopItem;