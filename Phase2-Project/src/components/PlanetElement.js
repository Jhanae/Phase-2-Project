import React from 'react'

function PlanetElement({planet}) {
    console.log(planet.image)
    return (
        <div className="card-deck row">
            <div className="card col-md-5" >
                <img src={planet.image} className="img-fluid card-img-top" alt={planet.name}/>
                <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">{planet.description}</p>
                </div>
                <div className="card-footer col">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
            <br />
        </div>
    )
}
export default PlanetElement;
