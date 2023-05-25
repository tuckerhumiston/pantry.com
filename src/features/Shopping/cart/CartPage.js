import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from './cartSlice';
import CartItem from './CartItem';

export default function CartPage() {
    const cart = useSelector(selectCart);

    return (
        <div>
            <div className="cart">
                {cart.cart?.map( (item) => (
                    <CartItem 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price} 
                        quantity={item.quantity}
                    />
                ))}
            </div>
        </div>
    )
}