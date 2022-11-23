import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "../components/ExplorePage.css";
import SearchBox from "./SearchBox";
import Navbar from "./NavBar";
import MovieSlider from "./MovieSlider";


const ExplorePage = () => {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [upcomingMovies, setUpcomingMovies] = useState([]);


    const getMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=ca776bbe7736cbc79b13f2bf8722288d`;

        const response = await fetch(url);
        const data = await response.json();

            setMovies(data.results);
            setSearchMovies(data.results);
    };

    const getUpcomingMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=ca776bbe7736cbc79b13f2bf8722288d`;

        const response = await fetch(url);
        const data = await response.json();

            setUpcomingMovies(data.results);
    };

    const getSearchMovies = async (search) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ca776bbe7736cbc79b13f2bf8722288d&query=${search}`;

        const response = await fetch(url);
        const data = await response.json();
            if(search.trim().length==0){
                setSearchMovies(movies)
                return
            }
            setSearchMovies(data.results || []);
    };

    useEffect(() => {
        getMovies();
        getUpcomingMovies();
    }, []);


    return (
        <>
            <Navbar />
            <div className="yyy">

                <div className="searchbox-explore">
                    <SearchBox getSearchMovies={getSearchMovies} searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className="explore-area">

                    <MovieSlider movies={searchMovies} />
                    <MovieSlider movies={upcomingMovies} />



                </div>
            </div>
        </>
    );
};

export default ExplorePage;