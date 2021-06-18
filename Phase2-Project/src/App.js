import './App.css';
import React from 'react'
import PlanetData from './db.json'

import Navbar from './components/Navbar';
import PlanetContainer from './components/PlanetContainer';
import homeBody from './components/homeBody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home'


function App() {
  return (
    <div className="App">
      <Navbar />
      <PlanetContainer data={PlanetData}/>
    </div>
  );
}

export default App;
