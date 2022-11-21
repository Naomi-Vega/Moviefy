import React from 'react';
import "../components/ExplorePage.css"
import { FaEye, FaAngleDoubleRight, FaStar } from "react-icons/fa";
import { useAppContext } from '../AppContext';



const Movie = (props) => {
    const contextData = useAppContext()

    return (
        <>
        {props.movies.map((movie, index) => (
        <div className="movie-container">
            <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="movie"></img>
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
            <button className='watched-btn' onClick={()=>{
                contextData.addWatched(movie)
            }}><FaEye /></button>
            <button className='towatch-btn' onClick={()=>{
                contextData.addToWatch(movie)
            }}><FaAngleDoubleRight /></button>
            <button className='fav-btn' onClick={()=>{
                contextData.addFavorite(movie)
            }}><FaStar /></button>



        </div>
        ))}
        </>
    );
};

export default Movie;