import React from 'react'
import PlanetInfo from "./PlanetInfo"

function PlanetElement({planet}) {

    let hrefLink=`planet/${planet.name}`
    
    return (
        <div className=" text-center  col-md-4 ">
            <div className="overflow" >
                <img src={planet.image} className="img-fluid card-img-top" alt={planet.name}/>
            </div>
                <div className="card-body text-light">
                <h5 className="card-title ">{planet.name}</h5>
                <h5 className="card-text text-secondary">{planet.description}</h5>
                <a href={"/planet/Mercury"} onClick={(e) => {return <PlanetInfo planet={ e.target.value}/>}} className="btn btn-outline-success">View Planet</a>
                
            </div>
            <br />
        </div>
    )
}
export default PlanetElement;
