import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './AppContext';
import ExplorePage from './components/ExplorePage';
import LandingPage from './components/LandingPage';
import Navbar from './components/NavBar';
import SignIn from './components/SignIn';
import UserPage from './components/UserPage';
import MovieDetailPage from './components/MovieDetailPage';

function App() {
  const contextData = useAppContext()
  const [userLoading, setUserLoading] = useState(true)

  const getCurrentUser = async () => {
    try {
      const res = await axios.get("/currentUser", {
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      contextData.setUser(res.data)
    } catch (error) {
      console.log(error)
    }
    setUserLoading(false)
  }

  useEffect (() => {
    getCurrentUser()
  }, [])

  if (userLoading) {
    return <p>Loading</p>
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/movie/:id' element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
