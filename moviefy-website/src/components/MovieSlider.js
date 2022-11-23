import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import "../components/ExplorePage.css"
import { FaEye, FaAngleDoubleRight, FaStar } from "react-icons/fa";
import { useAppContext } from '../AppContext';

const MovieSlider = (props) => {
    const contextData = useAppContext()

    return <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.movies.map((movie, index) => (
        <SwiperSlide>
        <div className="movie-container">
            <div className='image-container slider-image-container'>
            <img src={"https://image.tmdb.org/t/p/w185"+movie.poster_path} alt="movie"></img>
            <div className='movie-overlay'>
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