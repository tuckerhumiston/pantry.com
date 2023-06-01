import React, { useState, useEffect } from "react";
import "../../styles/components.css";
import './Recipes.css';

const key = '89282685-0b1f-4495-8a64-4088f790e6ee';

export default function Recipes() {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  const recipesDisplay = posts.map((response, i) => (
      <div key={i} className="list-group-item">
        <img src={response.image_url} alt={response.title} />
        <div>
          <h3>{response.title}</h3>
          <p>By: {response.publisher}</p>
          <button onClick={() => handleRecipe(response.id)}>Get Recipe</button>
        </div>
      </div>    
  ));

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };

  // Runs every time the search bar is modified
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // API call to fetch recipe details
  const handleRecipe = async (recipeId) => {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=${key}`
        );
      if (response.ok) {
        const jsonResponse = await response.json();
        setSelectedRecipe(jsonResponse.data.recipe);

      }
    } catch (err) {
      console.log(err);
    }
  };

  // API call to fetch recipes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=${key}`
        );
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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search Recipes..."
          onChange={handleChange}
          value={searchInput}
        />
      </form>
      {selectedRecipe ? (
        <div className="recipe-details">
          <h2>{selectedRecipe.title}</h2>
          <img src={selectedRecipe.image_url} alt={selectedRecipe.title} />
          <div>
            <h3>Ingredients:</h3>
            <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.unit} {ingredient.description}
              </li>
            ))}
            </ul>
          </div>
          <button onClick={() => setSelectedRecipe(null)}>Back to Recipes</button>
        </div>
      ) : (
        recipesDisplay
      )}
    </div>
  );
}
