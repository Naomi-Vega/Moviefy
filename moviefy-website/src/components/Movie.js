import React from 'react';
import "../styles/movieCard.css"
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';



const Movie = (props) => {
    const contextData = useAppContext()
    const navigate = useNavigate()

    return (
        <div className='movies-container-userpage'>
            {props.movies.map((movie, index) => (
                <div className="movie-container-userpage">
                    <div className='image-container slider-image-container'>
                        <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="movie"></img>

                        <div className='movie-overlay'>
                        <div className='overlay-content'>
                            
                        <h1 className='card-title'>{movie.title}</h1>
                            {/* <p>{movie.title}</p>
                        <p>{movie.release_date}</p> */}
                        {/* <p className='movie-container-overview'>{movie.overview}</p> */}
                            {/* <button className='watched-btn' onClick={() => {
                                contextData.addWatched(movie)
                            }}><FaEye /></button>
                            <button className='towatch-btn' onClick={() => {
                                contextData.addToWatch(movie)
                            }}><FaAngleDoubleRight /></button>
                            <button className='fav-btn' onClick={() => {
                                contextData.addFavorite(movie)
                            }}><FaStar /></button> */}
                            <button onClick={()=> {
                                    navigate(`/movie/${movie.id}`)
                                }}>See details</button>
                                </div>
                        </div>
                    </div>
                    {props.watched && <button onClick={()=> props.openReview(movie)}>Add Review</button>}

                </div>
            ))}
        </div>
    );
};

export default Movie;