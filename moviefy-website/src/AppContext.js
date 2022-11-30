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

    const addFavorite = (movie) =>{
        setFavorites([...favorites, movie])
        localStorage.setItem("favorites", JSON.stringify([...favorites, movie]))
    }

    const addToWatch = (movie) =>{
        setToWatch([...toWatch, movie])
        localStorage.setItem("toWatch", JSON.stringify([...toWatch, movie]))
    }

    const addWatched = (movie) =>{
        setWatched([...watched, movie])
        localStorage.setItem("watched", JSON.stringify([...watched, movie]))
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