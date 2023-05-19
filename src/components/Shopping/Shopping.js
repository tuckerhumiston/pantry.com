import React, {useState} from 'react';
import "../../styles/components.css"
// import styles from "./shopping.module.css"
import Search from "../Search";
import Inventory from '../../features/Shopping/inventory/Inventory';
import { Cart } from '../../features/Shopping/cart/cart';

export default function Shopping() {

    return (
        <div className='main'>
            <h1>Shopping</h1>
            <Search id="shopping-search" />
            
            <h2>Cart: 🛒 </h2>
            <Cart />

            <div>
                <h2>Produce</h2>
                <Inventory />
            </div>
            
        </div>
    )
}


