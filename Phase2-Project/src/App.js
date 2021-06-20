import './App.css';
import React from 'react'
import PlanetData from './db.json'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PlanetContainer from './components/PlanetContainer';
import Home from './components/home'
import AddNewForm from './components/AddNewForm'
import About from './components/About'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App page-container">
      <div className="content-wrap" >
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/planets" component={() => <PlanetContainer data={PlanetData}/>} />
        <Route exact path="/newplanet" component={AddNewForm}/>
        <Route exact path="/about-us" component={About}/>

      </Switch>
      </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
