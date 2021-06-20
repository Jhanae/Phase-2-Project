import React,{useState} from "react";

function AddNewForm (){
    const [name, setName]=useState("")
    const [moons, setMoons]=useState("")
    const [radius, setRadius]=useState(0)
    const [distance, setDistance]=useState(0)
    const [temperature,setTemperature]=useState(0)
    const [type, setType]=useState("Terrestrial")
    const [image,setImage]=useState("")
    const [desc, setDesc]=useState("")

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
        <form>
        <label for="name">Planet Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleName}></input>
        <label for="moons">Moons:</label>
        <input type="text" id="moons" name="moons" value={moons} onChange={handleMoons}></input>
        <label for="radius">Radius:</label>
        <input type="text" id="radius" name="radius" value={radius} onChange={handleRadius}></input>
        <label for="distance">Distance from the Sun in Mi.:</label>
        <input type="text" id="distance" name="distance" value={distance} onChange={handleDistance}></input><br/>
        <label for="temperature">Temperature in degrees F:</label>
        <input type="text" id="temperature" name="temperature" value={temperature} onChange={handleTemperature}></input>
        <label for="type">Type:</label>
        <select id="type" name="type" value={type} onChange={handleType}>
            <option value="Terrestrial">Terrestrial</option>
            <option value="Gas Giant">Gas Giant</option>
            <option value="Ice Giant">Ice Giant</option>
            <option value="Dwarf Planet">Dwarf Planet</option>
        </select>
        <label for="image">Image URL:</label>
        <input type="text" id="image" name="image" value={image} onChange={handleImage}></input>
        <label for="description">Description:</label>
        <input type="text" id="description" name="description" value={desc} onChange={handleDesc}></input>
        <br/>
        <input type="submit"></input>
    </form>
)

}
export default AddNewForm;