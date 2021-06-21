import React, {useState} from 'react'
import PlanetElement from './PlanetElement'
// import Button from './button'
import Filter from './Filter'
import {Router, Route} from "react-router"
import PlanetInfo from "./PlanetInfo"

const PlanetContainer = ({data}) => {

    const [searchText, setSearch] = useState("")
    const [type, setType] = useState('All')
    let planet ;

    // filter data prop
    const filterText = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

    //  each type
    const filterType = filterText.filter(item => item.type === type)

    if(type === 'All')
    {
        console.log(type)
        planet = data.map(item => {
            return <PlanetElement planet={item} key={item.id} />
         })
    }
    else{
        console.log('cant get this function right')
        planet = filterType.map(item => {
            return <PlanetElement planet={item} key={item.id} />
         })
    }  

     return (
        <div className="planet-container container-fluid  justify-content-center">
            <div className="container">

                <Filter setType={setType}/>
                <div className="input-group-lg">
                <input
                    type="text"
                    placeholder="Search Plants..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <i className="circular search link icon" />
                </div>
            </div>
            <div className="mb-4 row">
                    {planet}
                    <br/>
            </div>
            <Route exact path={`/planet/${planet.name}`} component={()=><PlanetInfo planet={planet}/>}/>
        </div>
    )
}
export default PlanetContainer;