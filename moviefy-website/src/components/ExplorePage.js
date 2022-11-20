import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "../components/ExplorePage.css";
import SearchBox from "./SearchBox";
import Navbar from "./NavBar";


const ExplorePage = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
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
            <Navbar />
            <div className="yyy">

                <div className="searchbox-explore">
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className="explore-area">

                    <Movie movies={movies} />



                </div>
            </div>
        </>
    );
};

export default ExplorePage;