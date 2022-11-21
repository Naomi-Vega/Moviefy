const { createContext, useContext, useState } = require("react");

const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState([])
    const [toWatch, setToWatch] = useState([])
    const [watched, setWatched] = useState([])
    const [status, setStatus] = useState("favorites")

    const addFavorite = (movie) =>{
        setFavorites([...favorites, movie])
    }

    const addToWatch = (movie) =>{
        setToWatch([...toWatch, movie])
    }

    const addWatched = (movie) =>{
        setWatched([...watched, movie])
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