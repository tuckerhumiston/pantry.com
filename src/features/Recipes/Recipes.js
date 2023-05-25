import React from "react";
import "../../styles/components.css"
import SearchBar from "../../components/Search";

export default function Recipes() {

    return (
        <div className="main">
            <h1>Recipes</h1>
            <SearchBar id="recipe-search" />
        </div>
    )

}