import React from 'react';
import {useSelector} from 'react-redux';
import { selectCart } from '../../features/Shopping/cart/cartSlice.js';


import "../../styles/components.css"
import Search from "../Search";
import Inventory from '../../features/Shopping/inventory/Inventory';
import { Cart } from '../../features/Shopping/cart/cart';

export default function Shopping() {
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

    return (
        <div className='main'>
            <h1>Shopping</h1>
            <Search id="shopping-search" />
            
            <h2>Cart: 🛒 ${getTotal()}</h2>
            <Cart />

            <div>
                <h2>Produce</h2>
                <Inventory />
            </div>
            
        </div>
    )
}

