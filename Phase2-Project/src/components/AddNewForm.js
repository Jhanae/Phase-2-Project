import React from "react";

function AddNewForm (){
    return (
        <form>
            <label for="name">Planet Name:</label>
            <input type="text" id="name" name="name"></input>
            <label for="moons">Moons:</label>
            <input type="text" id="moons" name="moons"></input>
            <label for="radius">Radius:</label>
            <input type="text" id="radius" name="radius"></input>
            <label for="distance">Distance from the Sun in Mi.:</label>
            <input type="text" id="distance" name="distance"></input><br/>
            <label for="temperature">Temperature in degrees F:</label>
            <input type="text" id="temperature" name="temperature"></input>
            <label for="type">Type:</label>
            <select id="type" name="type">
                <option value="Terrestrial">Terrestrial</option>
                <option value="Gas Giant">Gas Giant</option>
                <option value="Ice Giant">Ice Giant</option>
                <option value="Dwarf Planet">Dwarf Planet</option>
            </select>
            <label for="image">Image URL:</label>
            <input type="text" id="image" name="image"></input>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description"></input>
            <br/>
            <input type="submit"></input>

            
        </form>
    )

}
export default AddNewForm