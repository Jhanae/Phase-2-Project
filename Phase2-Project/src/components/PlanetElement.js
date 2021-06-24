import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PlanetInfo from "./PlanetInfo"

function PlanetElement({planet, handleDelete}) {
   
   
    return (
        <div className=" text-center  col-md-4 ">
            <div className="overflow" >
                <img src={planet.image} className="img-fluid card-img-top" alt={planet.name}/>
            </div>
                <div className="card-body text-light">
                <h5 className="card-title ">{planet.name}</h5>
                <h5 className="card-text text-secondary">{planet.description}</h5>
                {/* <NavLink to={`/planet/${planet.name}`}>View Planet</NavLink> */}
                <a href={`/planet/${planet.name}`} 
                // onClick={(e) => {return <PlanetInfo />}} 
                className="btn btn-outline-success">View Planet</a> 
                <button className="btn btn-outline-success" onClick={(e) => handleDelete(planet.id)} >Delete</button>
                
            </div>
        </div>
    )
}
export default PlanetElement;
