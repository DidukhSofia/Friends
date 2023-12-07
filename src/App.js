import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HiredFriends from './components/HiredFriends';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Signin from './components/Authorization/Signin';
import Signup from './components/Authorization/Signup';
import Friends from './components/Friends/Friends';
import Services from './components/Services/Services';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allfriends" element={<Friends />} />
          <Route path="/services" element={<Services />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App