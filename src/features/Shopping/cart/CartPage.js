import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from './cartSlice';
import CartItem from './CartItem';
import './CartPage.css';


export default function CartPage() {
    const cart = useSelector(selectCart);

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.cart.forEach(item => {
          totalQuantity += item.quantity;
          totalPrice += item.price * item.quantity;
        })
        totalPrice = totalPrice.toFixed(2); 
        return totalPrice;
      }

    const handleCheckout = () => {
        console.log('testing checkout');

        // Note:
        //     1. First set up new state for the pantry items
        //     2. Have this handleCheckout function temporarily remove all items from the cart and add them to the pantry.

    }

    


    return (
        <div className="cart-page">
            <h1>Cart</h1>
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
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => handleCheckout()}>Checkout</button>
        </div>
    )
}