import React, {useState} from "react";
import './PlanetInfo.css'

function PlanetInfo({planet}){

const [toggleState, setToggleState] = useState(1);

const toggleTab = (index) => {
  setToggleState(index);
};

return (
    <div>
        <br/>
        <h3 className="card-title ">{planet.name}</h3>
        <img src={planet.image} alt={planet.name} />
    <div className="tab-container">
        <div className="bloc-tabs">
        <button
            className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(7)}
        >
            Type
        </button>
        <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
        >
            Moons
        </button>
        <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
        >
            Radius
        </button>
        <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
        >
            Distance
        </button>
        <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
        >
            Temperature
        </button>
        <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
        >
            Description
        </button>
        </div>

        <div className="content-tabs">
        <div
            className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <h5>{planet.name} has {planet.moons} moons</h5>
            
        </div>

        <div
            className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <h5>{planet.name} has a radius or {planet.radius} miles.</h5>
            
            {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
            </p> */}
        </div>

        <div
            className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <h5>{planet.name} is approximately {planet.distance} million miles away from the sun.</h5>
            
        </div>

        <div
            className={toggleState === 4 ? "content  active-content" : "content"}
        >
            <h5>{planet.name} is approximately {planet.temperatureInF} degrees fahrenheit</h5>
            
        </div>
        <div
            className={toggleState === 5 ? "content  active-content" : "content"}
        >
            <h5>{planet.description}</h5>
            
        </div>
        <div
            className={toggleState === 7 ? "content  active-content" : "content"}
        >
            <h5>{planet.name} is a {planet.type} planet</h5>
            
        </div>
        </div>
    </div>
  </div>
);
}

export default PlanetInfo