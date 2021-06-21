import React from "react";

function PlanetInfo(planet){
console.log("I'm in mercury")

return(
    <div className="PlanetInfo">
        <h3 className="text-light">Mercury</h3>
        <img src="https://nineplanets.org/wp-content/uploads/2020/03/mercury.png"></img>
    <p className="text-light">Radius:2322</p>
    <p className="text-light">Moons:32322</p>
    <p className="text-light">Distance from the Sun: 33334</p>
    <p className="text-light">Temperature in F:43333</p>
    <p className="text-light">Type:Terrestrial</p>
    </div>
)
    
}
export default PlanetInfo