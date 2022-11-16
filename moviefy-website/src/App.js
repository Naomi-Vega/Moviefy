import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ExplorePage from './components/ExplorePage';
import UserPage from './components/UserPage';
import { Navbar } from './components/NavBar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />

      <Routes>
      
       <Route path='/' element={<LandingPage />}/>
       <Route path='/explore' element={<ExplorePage />}/>
       <Route path='/user' element={<UserPage />}/>
       </Routes>
       </BrowserRouter>
     
  
   

    </div>
  );
}

export default App;
