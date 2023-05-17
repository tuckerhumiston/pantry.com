import React, {useState} from 'react';
import "../../styles/components.css"
// import styles from "./shopping.module.css"
import Search from "../Search";
import Inventory from '../../features/Shopping/inventory/Inventory';

import { produce2 } from '../../features/Shopping/inventory/storeItems';



export default function Shopping() {

    return (
        <div className='main'>
            <h1>Shopping</h1>
            <Search id="shopping-search" />
            
            <h2>Cart: 🛒 </h2>
            
            <ul> {/* Display Cart contents */}
                
            </ul>

            <div>
                <h2>Produce</h2>
                <Inventory />
            </div>
            
        </div>
    )
}


