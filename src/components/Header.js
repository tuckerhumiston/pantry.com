import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {

    return (
        <div className="header">
            <div className="header-links">
                <NavLink className="link" to="/home">Home</NavLink>
                <NavLink className="link" to="/shopping">Shop</NavLink> 
                <NavLink className="link" to="/pantry">Pantry</NavLink>
                <NavLink className="link" to="/recipes">Recipes</NavLink>
                <NavLink className="link" to="/profile">Profile</NavLink>
            </div>
            
        </div>
    )
}