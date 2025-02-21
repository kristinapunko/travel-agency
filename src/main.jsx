import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <Header/>
    <App />
    <Footer/>
  </BrowserRouter>
);