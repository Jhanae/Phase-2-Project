import React from 'react'
import { NavLink } from 'react-router-dom'
import PlanetInfo from "./PlanetInfo"

function PlanetElement({planet}) {
   
    let hrefLink=`planet/${planet.name}`
    
    return (
        <div className=" text-center  col-md-4 ">
            <div className="overflow" >
                <img src={planet.image} className="img-fluid " alt={planet.name}/>
            </div>
                <div className="card-body text-light">
                <h5 className="card-title ">{planet.name}</h5>
                <h5 className="card-text text-secondary">{planet.description}</h5>
                {/* <NavLink to={`/planet/${planet.name}`}>View Planet</NavLink> */}
                <a href={`/planet/${planet.name}`} 
                // onClick={(e) => {return <PlanetInfo />}} 
                className="btn btn-outline-success">View Planet</a> 
            </div>
        </div>
    )
}
export default PlanetElement;
