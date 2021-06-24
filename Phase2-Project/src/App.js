import './App.css';
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PlanetContainer from './components/PlanetContainer';
import Home from './components/home'
import AddNewForm from './components/AddNewForm'
import About from './components/About'
import Footer from './components/Footer';
import PlanetInfo from './components/PlanetInfo';
import CommentSection from './components/CommentSection';
import Contact from './components/Contact.js';
import Distance from './components/Distance';


function App() {
  const [planetData, setPlanetData]=useState([])

  const API="http://localhost:3000/PlanetData"

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then((data)=>{
      setPlanetData(data)
    })
  },[])


  return (
    <div className="App page-container">
      <div className="content-wrap" >
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/planets" component={() => <PlanetContainer data={planetData}/>} />
        <Route path="/distance" component={() => <Distance planets={planetData}/>} />
        <Route exact path="/newplanet" component={()=> <AddNewForm setPlanetData={setPlanetData} planetData={planetData}/>}/>
        <Route exact path="/about-us" component={About}/>
        <Route exact path="/reviews" component={CommentSection}/>
        <Route exact path="/contact-us" component={Contact}/>
        {planetData.map((planet)=>{return <Route exact path={`/planet/${planet.name}`} component={()=><PlanetInfo planet={planet}/>}/>})}
        <Route path="" component={Home}/>
      </Switch>
      </Router>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
