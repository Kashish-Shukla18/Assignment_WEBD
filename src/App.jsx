import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import Classes from './Components/Classes';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </Router>
  );
}

export default App;
