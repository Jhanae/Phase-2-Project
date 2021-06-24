import React, {useState} from 'react'
import PlanetElement from './PlanetElement'
// import Button from './button'
import Filter from './Filter'
import Footer from './Footer'

const PlanetContainer = ({data}) => {

    
    const [planetItem, setPlanetItem] = useState(data)
    const [searchText, setSearch] = useState("")
    const [type, setType] = useState('All')
    let planet ;
    
    function handleDelete(planetID){
        const filteredArray = planetItem.filter((item) => item.id !== planetID)
        // console.log(filteredArray)

        fetch(`http://localhost:3000/PlanetData/${planetID}`,{
            method: "DELETE",
        })
        .then(data => setPlanetItem(filteredArray))
    }

    function sortAlphabetically(){
        data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    function sortRadius(){
        data.sort((a, b) => (a.radius > b.radius) ? 1 : -1)
    }
    function sortDistance(){
        data.sort((a, b) => (a.distanceFromSun < b.distanceFromSun) ? 1 : -1)
    }
    

    // filter data prop
    const filterText = planetItem.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))

    //  each type
    const filterType = filterText.filter(item => item.type === type)

    if(type === 'All')
    {
        console.log(type)
        planet = filterText.map(item => {
            return <PlanetElement planet={item} key={item.id} handleDelete={handleDelete} />
         })
    }
    else{
        console.log('cant get this function right')
        planet = filterType.map(item => {
            return <PlanetElement planet={item} key={item.id}  handleDelete={handleDelete}  />
         })
    }  

     return (
        <div className="planet-container container-fluid  justify-content-center">
            <div className="container">
            
                <Filter sortAlphabetically={sortAlphabetically} sortRadius={sortRadius} sortDistance={sortDistance} setType={setType}/>
                <div className="input-group-lg">
                <input
                    className="filterSearch"
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
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
export default PlanetContainer;