import React from 'react';
import "../components/ExplorePage.css"
import { FaEye, FaAngleDoubleRight, FaStar } from "react-icons/fa";



const Movie = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
        <div className="movie-container">
            <img src={movie.Poster} alt="movie"></img>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <button className='watched-btn'><FaEye /></button>
            <button className='towatch-btn'><FaAngleDoubleRight /></button>
            <button className='fav-btn'><FaStar /></button>



        </div>
        ))}
        </>
    );
};

export default Movie;