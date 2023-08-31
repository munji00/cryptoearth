import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage,CryptoCurrencies, CryptoDetails, News } from './components';
//import CryptoDetails from './components/CryptoDetails';
import './App.css';

const App = () => {
  return(
    <div className="app">
       <div className="navbar">
         <Navbar />
       </div>
       <div className="main">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
                <Route path="/news" element={<News/>} /> 
              </Routes>
       </div>
       <div className="footer">
          Footer
       </div>
    </div> 
  ) 
};

export default App; 