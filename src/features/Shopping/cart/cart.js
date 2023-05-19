import { React } from 'react';
import { useSelector } from "react-redux";
import { selectCart } from './cartSlice';


export const Cart = () => {
    const cart = useSelector(selectCart);

    return (
        <div className="cart">
            {cart.cart?.map( (item) => (
                <p>{item.name} x{item.quantity}</p>
            ))}
        </div>
    )
}
