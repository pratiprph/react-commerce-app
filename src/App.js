import React, { useState, useEffect } from 'react';

import './App.css';

import instance from './axios/axiosConfig';

import Header from './common/Header';
import Carousel from './pages/Carousel';

function App() {
  

  return (
    <div className="App">
      <Header/><br/><br/>
      <Carousel/>
    </div>
  );
}

export default App;
