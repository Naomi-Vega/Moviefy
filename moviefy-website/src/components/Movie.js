import React from 'react';
import "../styles/movieCard.css"
import { FaEye, FaAngleDoubleRight, FaStar } from "react-icons/fa";
import { useAppContext } from '../AppContext';



const Movie = (props) => {
    const contextData = useAppContext()

    return (
        <div className='movies-container'>
            {props.movies.map((movie, index) => (
                <div className="movie-container">
                    <div className='image-container slider-image-container'>
                        <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="movie"></img>

                        <div className='movie-overlay'>
                            <div className='overlay-card'>
                            <div className='movie-text'>
                            <p className='movietitle'>{movie.title}</p>
                        <p className='movierelease'>{movie.release_date}</p>
                        </div>
                        <div>
                        {props.watched && <button onClick={()=> props.openReview(movie)}>Add Review</button>}
                        </div>
                        {/* <p className='movie-container-overview'>{movie.overview}</p> */}
                        <div>
                            <button className='watched-btn' onClick={() => {
                                contextData.addWatched(movie)
                            }}><FaEye /></button>
                            <button className='towatch-btn' onClick={() => {
                                contextData.addToWatch(movie)
                            }}><FaAngleDoubleRight /></button>
                            <button className='fav-btn' onClick={() => {
                                contextData.addFavorite(movie)
                            }}><FaStar /></button>
                             </div>
                        </div>
                    </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Movie;