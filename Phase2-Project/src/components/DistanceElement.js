import React, {useState} from 'react'
import Distance from './Distance';

function DistanceElement({planets, setCurrentPlanet, currentPlanet}){
    console.log(planets)

    return (
        <div className="col planet-row">
            <p className="label text-light">{planets.name}</p>
            <img src={planets.image} alt={planets.name} className="planet-img " onClick={() => (setCurrentPlanet(planets.id))} />
            {/* {currentPlanet ? <p className={currentPlanet ? "active-distanceP text-light" : "distanceP "} >{planets.distanceFromSun} </p> : null} */}
            {planets.id === currentPlanet ? <p className="text-light">{planets.distanceFromSun}</p> : null}
        </div>
    )
}
export default DistanceElement;