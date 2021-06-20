import './App.css';
import React, {useState} from 'react'
import PlanetData from './db.json'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PlanetContainer from './components/PlanetContainer';
import Home from './components/home'
import AddNewForm from "./components/AddNewForm";

function App() {
  const [planetData, setPlanetData]=useState(PlanetData.PlanetData)

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/planets" component={() => <PlanetContainer data={planetData}/>}/>
        <Route path="/newplanet" component={()=><AddNewForm planetData={planetData} setPlanetData={setPlanetData}/>}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
