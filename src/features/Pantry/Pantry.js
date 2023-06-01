import React, {useState, useEffect} from "react";
import SearchBar from "../../components/Search";
import "./Pantry.css";

import { useSelector } from 'react-redux';
import { selectPantry } from './pantrySlice';
import PantryItem from "./PantryItem";



export default function Pantry() {
    const pantry = useSelector(selectPantry);

    return (
        <div className="main">            
            <div className="pantry">
                <div className="left">
                    <h2>Add Items</h2>
                    <SearchBar id="item-search" />

                </div>
                <div className="right">
                    <h2>Your Pantry</h2>
                    {/* <SearchBar id="pantry-search" /> */}
                    <table>
                        {pantry?.map((item) => (
                            <PantryItem 
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                quantity={item.quantity}
                            />
                        ))}
                    </table>

                </div>
            </div>
        </div>
    )

}