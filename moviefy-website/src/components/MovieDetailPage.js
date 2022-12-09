import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./MovieDetailPage.css"


const MovieDetailPage = () => {
    const params = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ca776bbe7736cbc79b13f2bf8722288d`)
        console.log(res.data)
        setMovie(res.data)
        const reviewres = await axios.get(`/review/${params.id}`)
        console.log(reviewres.data)
    } 

    useEffect(()=>{
        getMovie()
    }, [])

    if (!movie) {
        return <p>Loading...</p>
    }

    return <div className="movie-detail-container">
        <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} />

        <div>
            <h1>{movie.title}</h1>
            <div className="movie-detail-genre">
            <p>{movie.release_date}</p>
            {movie.genres.map((genre)=>{
                return <p>{genre.name}</p>
            })}
            </div>
        </div>
    </div>
}

export default MovieDetailPage