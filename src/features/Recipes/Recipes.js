import React, {useState, useEffect} from "react"
import "../../styles/components.css"
import './Recipes.css'

const key = '89282685-0b1f-4495-8a64-4088f790e6ee';

export default function Recipes() {

    const [posts, setPosts] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    
    const recipesDisplay = posts?.map((response, i) => (
        <div key={response.id} className="list-group-item">
            <img src={response.image_url} />
            <div>
                <h3 >{response.title}</h3>
                <p>By: {response.publisher}</p>
            </div>
        </div>
        
    ));

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);

    };

    const ShowPosts = () => {
        useEffect( () => { 
            async function fetchData() {
                try {
                    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=${key}`); 
                    if (response.ok) {
                        const jsonResponse = await response.json();
                        console.log(searchInput);
                        await setPosts(jsonResponse.data.recipes);
                        await console.log(jsonResponse);
                    }                    
                } catch (err) {
                    console.log(err);
                }
            }
            fetchData();
        }, []);
    }


    return (
        <div className="main">
            <h1>Recipes</h1>
            <form>
                <input
                        type="search"
                        placeholder="Search here"
                        onChange={handleChange}
                        value={searchInput}
                />
                <button onClick={handleChange}>Submit</button>
            </form>
            
            {ShowPosts()}
            {recipesDisplay}
            
        </div>
    )
}

