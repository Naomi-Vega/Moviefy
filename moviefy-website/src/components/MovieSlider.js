import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useRef } from 'react';
import "../components/ExplorePage.css"
import { FaEye, FaAngleDoubleRight, FaHeart } from "react-icons/fa";
import { useAppContext } from '../AppContext';
import { Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom'
import 'swiper/css/navigation'
import "../components/MovieSlider.css"

const MovieSlider = (props) => {
    const contextData = useAppContext()
    const navigate = useNavigate()

    return <div>
        <Swiper
            modules={[Navigation]}
            navigation
            speed={600}
            loop
            spaceBetween={50}
            slidesPerView={5}
        >
            {props.movies.map((movie, index) => (
                <SwiperSlide>
                    <div className="movie-container">
                        <div className='image-container slider-image-container'>
                            <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="movie"></img>
                            <div className='movie-overlay'>
                                <div className='movie-buttons'>
                                    <button className='watched-btn' onClick={() => {
                                        contextData.addWatched(movie)
                                    }}><FaEye /></button>
                                    <button className='towatch-btn' onClick={() => {
                                        contextData.addToWatch(movie)
                                    }}><FaAngleDoubleRight /></button>
                                    <button className='fav-btn' onClick={() => {
                                        contextData.addFavorite(movie)
                                    }}><FaHeart /></button>
                                </div>
                                <div className='slider-details-button'>
                                    <button onClick={() => {
                                    navigate(`/movie/${movie.id}`)
                                }}>See details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}


export default MovieSlider