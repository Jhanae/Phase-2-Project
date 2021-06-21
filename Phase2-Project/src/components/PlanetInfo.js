import React from "react";
import data from '../db.json'

function PlanetInfo({planet}){

console.log(planet)
                                                   

return(
    <div className="PlanetInfo">
        <h3 className="text-light">{planet.name}</h3>
        <img src={planet.image}></img>
    <p className="text-light">Radius:{planet.radius}</p>
    <p className="text-light">Moons:{planet.moons}</p>
    <p className="text-light">Distance from the Sun: {planet.distanceFromSun}</p>
    <p className="text-light">Temperature in F:{planet.temperatureInF}</p>
    <p className="text-light">Type:{planet.type}</p>
    </div>
)
    
}
export default PlanetInfo