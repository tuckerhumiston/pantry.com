import React from "react";
import "../styles/components.css"
import SearchBar from "./Search";


export default function Pantry() {

    return (
        <div className="main">
            <h1>Pantry</h1>
            <SearchBar id="recipe-search" />
        </div>
    )

}