import React from 'react';
import "../styles/components.css"

export default function Search() {

    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search Items</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search items"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>
    )
}