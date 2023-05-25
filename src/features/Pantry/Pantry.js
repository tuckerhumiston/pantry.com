import React from "react";
import SearchBar from "../../components/Search";
import "./Pantry.css";


export default function Pantry() {

    return (
        <div className="main">
            <h1>Pantry</h1>
            
            <div class="pantry">
                <div className="left">
                    <h2>Add Items</h2>
                    <SearchBar id="item-search" />
                </div>
                <div className="right">
                    <h2>Your Pantry</h2>
                    <SearchBar id="pantry-search" />
                </div>
            </div>
        </div>
    )

}