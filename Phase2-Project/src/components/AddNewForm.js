import React,{useState} from "react";

import background from "./Pictures/space.jpeg"

function AddNewForm ({planetData,setPlanetData}){
    const [name, setName]=useState("")
    const [moons, setMoons]=useState("")
    const [radius, setRadius]=useState(0)
    const [distance, setDistance]=useState(0)
    const [temperature,setTemperature]=useState(0)
    const [type, setType]=useState("Terrestrial")
    const [image,setImage]=useState("")
    const [desc, setDesc]=useState("")
    

  async function handleSubmit(event) {
    event.preventDefault();
    const formData={name:name, moons:moons, radius:radius,
         distanceFromSun:distance, temperatureInF:temperature,
         type:type, image:image, description:desc}
    
    const response= await fetch("http://localhost:3000/PlanetData",{
        headers: {"Content-Type": "application/json"},
        method:"POST",
        body: JSON.stringify(formData)
    })
    const newPlanet=await response.json()
    const dataArray=[...planetData,newPlanet]
    setPlanetData(dataArray)
    

  }

    function handleName(e){
        setName(e.target.value)
    }
    function handleMoons(e){
        setMoons(e.target.value)
    }
    function handleRadius(e){
        setRadius(e.target.value)
    }
    function handleDistance(e){
        setDistance(e.target.value)
    }
    function handleTemperature(e){
        setTemperature(e.target.value)
    }
    function handleType(e){
        setType(e.target.value)
    }
    function handleImage(e){
        setImage(e.target.value)
    }
    function handleDesc(e){
        setDesc(e.target.value)
    }

    return (
        <div className="form-container form-holder" >
        <h4 className="header text-light">Add New Planet</h4>
        <form  onSubmit={handleSubmit}>
            <div className="form-group">
            <div className="row">
                <label className="form-label" style={{color:"white"}} htmlFor="name">Planet Name:</label>
                <input className="form-input "  placeholder="Planet Name" type="text" id="name" name="name" value={name} onChange={handleName}></input>
            </div>
            <div className="row">
            <label className="form-label" style={{color:"white"}} htmlFor="moons">Number of Moons:</label>
            <input className="input form-input " type="text" id="moons" name="moons" placeholder="Moons" value={moons} onChange={handleMoons}></input>
            </div>
            <div className="row">
            <label className="form-label"style={{color:"white"}} htmlFor="radius">Radius of Planet:</label>
            <input className="input form-input " type="text" id="radius" name="radius" placeholder="Radius" value={radius} onChange={handleRadius}></input>
            </div>
            <div className="row">
            <label className="form-label"style={{color:"white"}} htmlFor="distance">Distance from the Sun in Mi.:</label>
            <input className="input form-input " type="text" id="distance" name="distance" placeholder="Distance" value={distance} onChange={handleDistance}></input>
            </div>
            <div className="row">
                <label className="form-label"style={{color:"white"}} htmlFor="temperature">Temperature in degrees F:</label>
                <input className="input form-input " type="text" id="temperature" name="temperature" placeholder="Temperature" value={temperature} onChange={handleTemperature}></input>
            </div>
            <div className="row">
                <label className="form-label" style={{color:"white"}} htmlFor="type">Type:</label>
                <select className="form-input  input" id="type" name="type" value={type} onChange={handleType}>
                    <option value="Terrestrial">Terrestrial</option>
                    <option value="Gas Giant">Gas Giant</option>
                    <option value="Ice Giant">Ice Giant</option>
                    <option value="Dwarf Planet">Dwarf Planet</option>
                </select>
            </div>
            <div className="row ">
                <label className="form-label"style={{color:"white"}} htmlFor="image">Image URL:</label>
                <input className="input form-input " type="text" id="image" name="image" placeholder="Image" value={image} onChange={handleImage}></input>
            </div>
            <div className="row ">
            <label className="form-label" style={{color:"white"}} htmlFor="description">Description:</label>
            <input className="input form-input " type="text" id="description" name="description" placeholder="Description" value={desc} onChange={handleDesc}></input>
            </div>
            <div className="row">
            <input className="form-input-btn input form-input sumbit-button" type="submit"></input>
            </div>
            </div>
       
      
    </form>
    </div>
)

}
export default AddNewForm;

