import { React } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addToCart, incrementQuantity, decrementQuantity, removeItem } from './cart/cartSlice';
import { selectCart } from './cart/cartSlice';

import styles from '../../features/Shopping/shopping.module.css';


export default function Item({item}) {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch()

    const image = item.image;
    const id = item.id;
    const title = item.name;
    const price = item.price;

    const findQuantity = () => {
        const found = cart.cart?.find( item => item.id === id);
        return found.quantity;
    }
    


    return (
        <div key={item.id} className={styles.item}>

            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>

            <div className='addToCart'>
                <button 
                    onClick={() => 
                        dispatch(addToCart({
                            id, title, image, price
                        }))
                    }>Add to Cart
                </button>
            </div>

            <div className={styles.editInCart}>
                <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                <p>x {findQuantity()}</p> 
                <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </div>

        </div>
    )
}