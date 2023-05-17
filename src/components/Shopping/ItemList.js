import React, { useState } from 'react';
import styles from "./shopping.module.css"

export default function ItemList({ items, onItemClick }) {
 
    const handleClick = ( ) => {

    }
    
    return (
        <div>
            {items.map((item, index) => (
                <div className={styles.item}>
                    <img src={require('../../styles/image-not-found.jpg')} />
                    
                    <p>Item Name</p>
                    <p>Price: $</p>
                    <div className="buttons">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            ))}
        </div>
    )
}