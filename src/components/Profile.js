import React from "react";
import "../styles/components.css";
import "../styles/Profile.css";

export default function Profile() {

    return (
        <div className="main">
            <h1>Profile</h1>
            <div id="user-info">
                <h3>Name: </h3>
                <h3>Email: </h3>
                <button><h2>Settings</h2></button>

            </div>
        </div>
    )

}