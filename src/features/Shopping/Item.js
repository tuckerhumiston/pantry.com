import { React } from 'react';
import styles from '../../features/Shopping/shopping.module.css';

import { addToCart } from './cart/cartSlice';
import { useDispatch } from "react-redux";


export default function Item({item}) {
    const dispatch = useDispatch()
    const image = item.image;
    const id = item.id;
    const title = item.name;
    const price = item.price;

    return (
        <div key={item.id} className={styles.item}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button 
                onClick={() => 
                    dispatch(addToCart({
                        id, title, image, price
                    }))
                }>Add to Cart
            </button>
        </div>
    )
}