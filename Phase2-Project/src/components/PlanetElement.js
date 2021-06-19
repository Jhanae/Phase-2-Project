import React from 'react'

function PlanetElement({planet}) {
    console.log(planet.image)
    let hrefLink=`planet/+${planet.name}`
    return (
        <div className="card text-center shadow col-md-3 ">
            <div className="overflow" >
                <img src={planet.image} className="img-fluid card-img-top" alt={planet.name}/>
            </div>
                <div className="card-body text-dark">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text text-secondary">{planet.description}</p>
                <a href={hrefLink} className="btn btn-outline-success">View Planet</a>
                {/* <div className="card-footer col">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <br />
        </div>
    )
}
export default PlanetElement;
