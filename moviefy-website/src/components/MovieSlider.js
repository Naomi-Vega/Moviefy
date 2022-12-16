import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useRef } from 'react';
import "../styles/movieCard.css"
import { FaEye, FaAngleDoubleRight, FaStar } from "react-icons/fa";
import { useAppContext } from '../AppContext';
import { Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom'
import 'swiper/css/navigation'


const MovieSlider = (props) => {
    const contextData = useAppContext()
    const navigate = useNavigate()

    return <div>
        <Swiper
            modules={[Navigation]}
            navigation
            speed={600}
            loop 
            spaceBetween={34}
            slidesPerView={5}
        >
            {props.movies.map((movie, index) => (
                <SwiperSlide>
                    <div className="movie-container">
                        <div className='image-container slider-image-container'>
                            <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="movie"></img>
                            <div className='movie-overlay'>
                                <div className='overlay-content'>
                            <div className='card-title'>{movie.title}</div>
                                <div className='details'>
                                <button onClick={()=> {
                                    navigate(`/movie/${movie.id}`)
                                }}>See details</button>
                                </div>

                                <div className='card-btn'>
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
                        {/* <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            <p className='movie-container-overview'>{movie.overview}</p>
            <button className='watched-btn' onClick={()=>{
                contextData.addWatched(movie)
            }}><FaEye /></button>
            <button className='towatch-btn' onClick={()=>{
                contextData.addToWatch(movie)
            }}><FaAngleDoubleRight /></button>
            <button className='fav-btn' onClick={()=>{
                contextData.addFavorite(movie)
            }}><FaStar /></button> */}

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}


export default MovieSlider