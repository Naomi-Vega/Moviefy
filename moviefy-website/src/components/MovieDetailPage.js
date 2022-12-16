import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./MovieDetailPage.css"
import "../components/ExplorePage.css"
import { FaEye, FaAngleDoubleRight, FaStar, FaHeart } from "react-icons/fa";
import { useAppContext } from "../AppContext";


const MovieDetailPage = () => {
    const params = useParams()
    const [movie, setMovie] = useState(null)
    const [reviews, setReviews] = useState([])
    const [video, setVideo] = useState(null)
    const contextData = useAppContext()

    const getMovie = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ca776bbe7736cbc79b13f2bf8722288d`)

        setMovie(res.data)
        const reviewres = await axios.get(`/review/${params.id}`)

        setReviews(reviewres.data)

        const videores = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=ca776bbe7736cbc79b13f2bf8722288d`)
        setVideo(videores.data.results[0])
    }

    useEffect(() => {
        getMovie()
    }, [])

    if (!movie) {
        return <p>Loading...</p>
    }

    return <>
    <div className="movie-detail-container">
        <div>
            <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} />
            <div className="movie-detail-icons">
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
        <div>
            <div className="detail-title">{movie.title}</div>
            <div className="movie-detail-genre">
                
                {movie.genres.map((genre) => {
                    return <p className="genre">{genre.name}</p>
                })}
            </div>
            <div>
            <p className="movie-rd">Released  {movie.release_date}</p>
            </div>
   
            <p>{movie.tagline}</p>
            <div className="overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            </div>
            <div className="detail-vid">
    {video && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
    {reviews.map((review) => {
        console.log(review)
        return <div>
            <p>{review.user.name}</p>
            <p>{review.rating}</p>
            <p>{review.review}</p>
        </div>
    })}
    </div>
        </div>
        
    </div>
    
    </>
}

export default MovieDetailPage