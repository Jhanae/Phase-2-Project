import React from 'react'
import PlanetElement from './PlanetElement'

const PlanetContainer = ({data}) => {
    const planet = data.map(item => {
       return <PlanetElement planet={item} key={item.id} />
    })
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                    {planet}
            </div>
        </div>
    )
}
export default PlanetContainer;