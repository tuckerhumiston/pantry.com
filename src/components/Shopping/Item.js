import { React } from 'react';
import styles from '../../styles/shopping.module.css';

import { addToCart, incrementQuantity, decrementQuantity } from '../../features/Shopping/cart/cartSlice';
import { useDispatch } from "react-redux";





//Note: Not sure what children does... FIXME?

export default function Item({item}) {
    const dispatch = useDispatch();

    const onAddToCartHandler = (item) => {
        dispatch(addToCart(item));
    }

    return (
        <div key={item.id} className={styles.item}>
            {/* <img src={require('../../styles/image-not-found.jpg')} /> */}
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div className="buttons">
                    <button onClick={() => onAddToCartHandler(item)}>+</button>
                    <button>-</button>
            </div>
        </div>
    )
}