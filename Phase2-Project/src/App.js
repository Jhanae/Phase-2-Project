import './App.css';
import React from 'react'
import PlanetData from './db.json'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PlanetContainer from './components/PlanetContainer';
import Home from './components/home'
import AddNewForm from "./components/AddNewForm";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}/>
      {/* <PlanetContainer data={PlanetData}/> */}
      <Route path="/planets" component={() => <PlanetContainer data={PlanetData}/>}/>
      <Route path="/newplanet" component={AddNewForm}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
