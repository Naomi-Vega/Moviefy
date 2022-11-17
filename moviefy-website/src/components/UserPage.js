import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import Movie from "./Movie";
import "../components/UserPage.css";
import SearchBox from "./SearchBox";
import ExplorePage from "./ExplorePage";
import AddFavourites from "./AddFavourites";
import Button from 'react-bootstrap'

const UserPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263f7004`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
        setMovies(responseJson.Search);
    }

   
   
};

useEffect(() => {
    getMovieRequest(searchValue);
}, [searchValue]);
    
    return (
        <>
            

            <div className="UserProperties">
            <button className="watched">Watched</button>
                <button className="toWatch">To Watch</button>
                <button className="favourites">Favourites</button>
            </div>

            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

            <div className="explore-area">
                
            <Movie movies={movies} />                    
                    
              
               
            </div>
        </>
    );
};

export default UserPage;