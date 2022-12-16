import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "../components/UserPage.css";
import SearchBox from "./SearchBox";
import ExplorePage from "./ExplorePage";
import AddFavourites from "./AddFavourites";
/* import Button from 'react-bootstrap' */
import Navbar from "./NavBar";
import { useAppContext } from "../AppContext";
import AddReview from "./AddReview";
import { useNavigate } from "react-router-dom";
import "../styles/movieCard.css"


const UserPage = () => {
    /* const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263f7004`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
        setMovies(responseJson.Search);
    }

   
   
}; */

/* useEffect(() => {
    getMovieRequest(searchValue);
}, [searchValue]); */

const contextData = useAppContext()
const [show, setShow] = useState(false);
const [reviewMovie, setReviewMovie] = useState({})
const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setShow(true);
    setReviewMovie(movie)
}    

    useEffect(() => {
        if (!contextData.user){
            navigate("/signin")
        }
    }, [])

    return (
        <>
            <Navbar />  
            <AddReview movie={reviewMovie} show={show} handleClose={handleClose} handleShow={handleShow}/>
            <div className="UserProperties">
            <button className="watched" onClick={()=>{
                    contextData.setStatus("watched")
                }}>Watched</button>
                <button className="toWatch" onClick={()=>{
                    contextData.setStatus("toWatch")
                }}>To Watch</button>
                <button className="favourites" onClick={()=>{
                    contextData.setStatus("favorites")
                }}>Favourites</button>
            </div>

            {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}

            <div className="explore-area">
                
            <Movie openReview={handleShow} watched={contextData.status=="watched"} movies={contextData.status=="favorites"?contextData.user.favorites:contextData.status=="toWatch"?contextData.user.toWatch:contextData.status=="watched"?contextData.user.watched:[]} />                    
                    
              
               
            </div>
        </>
    );
};

export default UserPage;