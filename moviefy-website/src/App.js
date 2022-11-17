import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppContext } from './AppContext';
import ExplorePage from './components/ExplorePage';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';

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
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/explore' element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
