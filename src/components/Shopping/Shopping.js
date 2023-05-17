import React, {useState} from 'react';
import "../../styles/components.css"
import styles from "./shopping.module.css"
import Search from "../Search";

import ItemList from "./ItemList";
import { produce2, dairy, candy } from '../../features/Shopping/inventory/storeItems';



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

            </div>
            
        </div>
    )
}


