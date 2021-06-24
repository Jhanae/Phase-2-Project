import React, {useState} from 'react'
import sun from './Pictures/sun.png'
import './Distance.css'
import { debug } from 'debug'
import styled from "styled-components";
import DistanceElement from './DistanceElement';

function Distance({planets}){

    const [planetDistance, setDistance] = useState("")
    const [currentPlanet, setCurrentPlanet] = useState(null)

    const Style = styled.img`
    transform: scale(1.5);
    transition: transform 0.5s ;`  

    const planet = planets.map(item => {
        return <DistanceElement style={Style} planets={item} key={item.id} currentPlanet={currentPlanet} setCurrentPlanet={setCurrentPlanet}/>
     })
    
    return (
        <div className="distance-container">
            <br/>
            <h1 className="distance-header text-light">Planets Distance from the Sun</h1>
            <br />
            <br />
            <br />
            <br />
            <div className="containerD">
                <div className="row">
                <br/>
                <div className="col sun-row">
                    <p className="label text-light">Sun</p>
                    <img src={sun} alt="sun" className="sun-img" />
                    
                </div>
                 {planet}
                </div>
            </div>
        </div>
    )
}
export default Distance;