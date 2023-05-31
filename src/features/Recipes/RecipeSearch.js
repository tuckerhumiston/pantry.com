import React, {useState} from 'react'


const searchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        countries.filter((country) => {
            return country.name.match(searchInput);
        });
    }

    return (
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
        />
    )
};