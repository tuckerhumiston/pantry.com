import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from './cartSlice';
import CartItem from './CartItem';

import { addToPantry, incrementQuantity } from "../../Pantry/pantrySlice";
import { selectPantry } from "../../Pantry/pantrySlice";

import './CartPage.css';


export default function CartPage() {
    const cart = useSelector(selectCart);
    const pantry = useSelector(selectPantry);
    const dispatch = useDispatch();

    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach(item => {
          totalQuantity += item.quantity;
          totalPrice += item.price * item.quantity;
        })
        totalPrice = totalPrice.toFixed(2); 
        return totalPrice;
      }

    const isItemInCart = (item) => {
        let found = pantry.find(item1 => item1.id === item.id);
        console.log(found);

        const id = item.id;
        const title = item.title;

        //FIXME
        if (found) {
            dispatch(incrementQuantity(item.id));
        } else {
            // dispatch(addToPantry(item.id, item.title));
            dispatch(addToPantry({id, title}));
            // console.log(item.title);
        }
    }

    const handleCheckout = () => {
        console.log('testing checkout...');

        cart?.forEach( item => (
            isItemInCart(item)
        ))

    }

    


    return (
        <div className="cart-page">
            <div className="shopping-cart">
                <h2>Shopping Cart:</h2>
                <div className="cart">
                    {cart?.map( (item) => (
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
                <button className="checkout-button" onClick={() => handleCheckout()}>Checkout</button>
            </div>
            <div className="payment">
                <h3>Payment Info:</h3>
                <form>
                    <label>Name On Card:</label>
                    <input type="text" />
                    <label>Card Number:</label>
                    <input type="number" />
                    <div className="date-cvv">
                        <div className="date">
                            <label>Expiration Date:</label>
                            <input type="date" />
                        </div>
                        <div className="cvv">
                            <label>CVV:</label>
                            <input type="number" />
                        </div>
                    </div>
                </form>
                <h3>Subtotal: ${getTotal()}</h3>
            </div>
        </div>
    )
}