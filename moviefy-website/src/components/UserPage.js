import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "../components/UserPage.css";
import SearchBox from "./SearchBox";
import ExplorePage from "./ExplorePage";
import AddFavourites from "./AddFavourites";
/* import Button from 'react-bootstrap' */
import Navbar from "./NavBar";
import { useAppContext } from "../AppContext";

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

const contextData = useAppContext()
    
    return (
        <>
            <Navbar />  

            <div className="UserProperties">
            <button className="watched" onClick={()=>{
                    contextData.setStatus("watched")
                }}>Watched</button>
                <button className="toWatch" onClick={()=>{
                    contextData.setStatus("toWatch")
                }}>To Watch</button>
                <button className="favourites" onClick={()=>{
                    contextData.setStatus("favorites")
                }}>Favourites</button>
            </div>

            {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}

            <div className="explore-area">
                
            <Movie movies={contextData.status=="favorites"?contextData.favorites:contextData.status=="toWatch"?contextData.toWatch:contextData.status=="watched"?contextData.watched:[]} />                    
                    
              
               
            </div>
        </>
    );
};

export default UserPage;