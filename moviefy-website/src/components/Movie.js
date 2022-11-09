import React from 'react';
import "../components/ExplorePage.css"


const Movie = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
        <div className="movie-container">
            <img src={movie.Poster} alt="movie"></img>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>

        </div>
        ))}
        </>
    );
};

export default Movie;