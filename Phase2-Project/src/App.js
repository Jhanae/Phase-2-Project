import './App.css';
import React, {useState} from 'react'
import PlanetData from './db.json'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PlanetContainer from './components/PlanetContainer';
import Home from './components/home'
import AddNewForm from './components/AddNewForm'
import About from './components/About'
import Footer from './components/Footer';
import PlanetInfo from './components/PlanetInfo';

function App() {
  const [planetData, setPlanetData]=useState(PlanetData.PlanetData)

  return (
    <div className="App page-container">
      <div className="content-wrap" >
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/planets" component={() => <PlanetContainer data={planetData}/>} />
        <Route exact path="/newplanet" component={()=> <AddNewForm setPlanetData={setPlanetData} planetData={planetData}/>}/>
        <Route exact path="/about-us" component={About}/>
        {planetData.map((planet)=>{return <Route exact path={`/planet/${planet.name}`} component={()=><PlanetInfo planet={planet}/>}/>})}
      </Switch>
      </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
