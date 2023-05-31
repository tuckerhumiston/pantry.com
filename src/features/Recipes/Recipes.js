import React, { useState, useEffect } from "react";
import "../../styles/components.css";
import './Recipes.css';

const key = '89282685-0b1f-4495-8a64-4088f790e6ee';

export default function Recipes() {

  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //Recipe component
  const recipesDisplay = posts.map((response, i) => (
    <div key={response.id} className="list-group-item">
      <img src={response.image_url} alt={response.title} />
      <div>
        <h3>{response.title}</h3>
        <p>By: {response.publisher}</p>
      </div>
    </div>
  ));

  //Runs everytime the searchbar is modified
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  //API call
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=${key}`);
        if (response.ok) {
          const jsonResponse = await response.json();
          setPosts(jsonResponse.data.recipes);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [searchInput]);


  return (
    <div className="main recipes">
      <form>
        <input
          type="search"
          placeholder="Search Recipes..."
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Submit</button>
      </form>
      {recipesDisplay}
    </div>
  );
}
