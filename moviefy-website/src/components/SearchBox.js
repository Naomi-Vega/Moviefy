import React from 'react';
import "../components/UserPage.css";
import "../components/Searchbox.css";
import { FaSearch } from "react-icons/fa";



const SearchBox = (props) => {
    return (
        <div className='container'>
            <form action="" className='search-bar'>
            
            <button type="submit"><FaSearch /></button>
            <input value={props.value} onChange={(event) => {
                props.setSearchValue(event.target.value)
                props.getSearchMovies(event.target.value)
                }} placeholder='Search' name="s">
            
            </input>
            </form>
        </div>
    )
}

export default SearchBox;