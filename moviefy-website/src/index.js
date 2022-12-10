import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppContextProvider } from './AppContext';
axios.defaults.baseURL = "https://moviefy.onrender.com"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AppContextProvider>
        <App />
    </AppContextProvider>
    </BrowserRouter>
    
);

