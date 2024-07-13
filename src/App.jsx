import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/projects" element={<Projects/>} />        
      </Routes>
    </>

  );
};

export default App;
