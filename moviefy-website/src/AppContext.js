const { createContext, useContext, useState } = require("react");

const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)

    const value = {
        user,
        setUser
    }

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)