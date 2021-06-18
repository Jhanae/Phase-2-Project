import React from 'react'
import PlanetElement from './PlanetElement'

const PlanetContainer = ({data}) => {
    const planet = data.map(item => {
       return <PlanetElement planet={item} key={item.id} />
    })
    return (
        <div>
            {planet}
        </div>
    )
}
export default PlanetContainer;