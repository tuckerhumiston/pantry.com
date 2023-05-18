import { React } from 'react';
import styles from '../../styles/shopping.module.css';

import { addToCart, removeItem } from '../../features/Shopping/cart/cartSlice';
import { useDispatch } from "react-redux";




//Need to add logic for increment and decrement cart items.

export default function Item({item}) {
    const dispatch = useDispatch();

    const onAddToCartHandler = (item) => {
        dispatch(addToCart(item));
    }
    const onRemoveFromCartHandler = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <div key={item.id} className={styles.item}>
            {/* <img src={require('../../styles/image-not-found.jpg')} /> */}
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div className="buttons">
                    <button onClick={() => onAddToCartHandler(item)}>+</button>
                    <button onClick={() => onRemoveFromCartHandler(item)}>-</button>
            </div>
        </div>
    )
}