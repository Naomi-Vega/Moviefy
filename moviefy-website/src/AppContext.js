import axios from "axios"

const { createContext, useContext, useState, useEffect } = require("react");

const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [toWatch, setToWatch] = useState([])
    const [watched, setWatched] = useState([])
    const [status, setStatus] = useState("favorites")

    useEffect (() => {
        setFavorites (JSON.parse(localStorage.getItem("favorites"))||[])
        setToWatch (JSON.parse(localStorage.getItem("toWatch"))||[])
        setWatched (JSON.parse(localStorage.getItem("watched"))||[])
    }, [])

    const addFavorite = async (movie) =>{
        setFavorites([...favorites, movie])
        localStorage.setItem("favorites", JSON.stringify([...favorites, movie]))
        try {
            const res = await axios.post("/favorite", movie, {
                headers:{
                    Authorization:localStorage.getItem("token")
                  }
            })
            console.log(res.data)
            setUser(res.data)
        } catch (error) {
            alert(error.response.data)
        }
        
    }

    const addToWatch = async (movie) =>{
        setToWatch([...toWatch, movie])
        localStorage.setItem("toWatch", JSON.stringify([...toWatch, movie]))
        try {
            const res = await axios.post("/toWatch", movie, {
                headers:{
                    Authorization:localStorage.getItem("token")
                  }
            })
            console.log(res.data)
            setUser(res.data)
        } catch (error) {
            alert(error.response.data)
        }
    
    }

    const addWatched = async (movie) =>{
        setWatched([...watched, movie])
        localStorage.setItem("watched", JSON.stringify([...watched, movie]))
        try {
            const res = await axios.post("/watched", movie, {
                headers:{
                    Authorization:localStorage.getItem("token")
                  }
            })
            console.log(res.data)
            setUser(res.data)
        } catch (error) {
            alert(error.response.data)
        }
    }

    const value = {
        user,
        setUser,
        favorites,
        addFavorite,
        toWatch,
        addToWatch,
        watched,
        addWatched,
        status,
        setStatus
    }

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)