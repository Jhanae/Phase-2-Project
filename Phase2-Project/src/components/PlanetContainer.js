import React, {useState} from 'react'
import PlanetElement from './PlanetElement'
// import Button from './button'
import Filter from './Filter'

const PlanetContainer = ({data}) => {

    const [searchText, setSearch] = useState("")

    // filter data prop
    const filterText = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

    // each planet
    const planet = filterText.map(item => {
        return <PlanetElement planet={item} key={item.id} />
     })

    return (
        <div className="planet-container container-fluid  justify-content-center">
            <div className="container">
                {/* input carousel */}
                <Filter />
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
        </div>
    )
}
export default PlanetContainer;