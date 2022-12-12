import React, { useState, useEffect } from "react";
import Movie from "./Movie";

import "../styles/Explore.css"
import SearchBox from "./SearchBox";
import Navbar from "./NavBar";
import MovieSlider from "./MovieSlider";


const ExplorePage = () => {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);


    const getPopularMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=ca776bbe7736cbc79b13f2bf8722288d`;

        const response = await fetch(url);
        const data = await response.json();

            setPopularMovies(data.results);
    };

    const getUpcomingMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=ca776bbe7736cbc79b13f2bf8722288d`;

        const response = await fetch(url);
        const data = await response.json();

            setUpcomingMovies(data.results);
    };

    const getTopRatedMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=ca776bbe7736cbc79b13f2bf8722288d`;

        const response = await fetch(url);
        const data = await response.json();

            setTopRatedMovies(data.results);
    };
    

    const getSearchMovies = async (search) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ca776bbe7736cbc79b13f2bf8722288d&query=${search}`;

        const response = await fetch(url);
        const data = await response.json();
            if(search.trim().length==0){
                setSearchMovies(null)
                return
            }
            setSearchMovies(data.results || []);
    };

    useEffect(() => {
        getPopularMovies();
        getUpcomingMovies();
        getTopRatedMovies();
    }, []);


    return (
        <>
            <Navbar />
            <div className="yyy">

                <div className="searchbox-explore">
                    <SearchBox getSearchMovies={getSearchMovies} searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className="explore-area">
                    {!searchMovies && <>
                    <h1>Popular Movies</h1>
                    <MovieSlider movies={popularMovies} />
                    <h1>Upcoming Movies</h1>
                    <MovieSlider movies={upcomingMovies} />
                    <h1>Top Rated Movies</h1>
                    <MovieSlider movies={topRatedMovies} />                    
                    </>}
                    {searchMovies && <Movie movies={searchMovies} />}

                </div>
            </div>
        </>
    );
};

export default ExplorePage;