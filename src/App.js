import React, { useState, useEffect } from 'react';

import './App.css';

import instance from './axios/axiosConfig';

import Header from './common/Header';
import Carousel from './pages/Carousel';
import Catalog from './pages/Catalog';

function App() {
  

  return (
    <div className="App">
      <Header/><br/>
      <Carousel/><br/><br/><br/><br/><br/><hr/>
      <span><h3>Deals of the Day:</h3></span>
      <Catalog/>
    </div>
  );
}

export default App;
