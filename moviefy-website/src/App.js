import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './AppContext';
import ExplorePage from './components/ExplorePage';
import LandingPage from './components/LandingPage';
import Navbar from './components/NavBar';
import SignIn from './components/SignIn';
import UserPage from './components/UserPage';

function App() {
  const contextData = useAppContext()

  const getCurrentUser = async () => {
    const res = await axios.get("/currentUser", {
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    contextData.setUser(res.data)
  }

  useEffect (() => {
    getCurrentUser()
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
