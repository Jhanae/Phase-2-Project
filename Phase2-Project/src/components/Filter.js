import React from 'react'
import { useState } from 'react'
import { Dropdown } from 'bootstrap';

function Filter({setType, showAll, sortAlphabetically, sortDistance, sortRadius}){
    

    return (
        <div>
            <div className="filter-btns" className="btns">
                <div className="dropdown">
                    <button className="filter-btns dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a onClick={sortAlphabetically} className="dropdown-item" href="#">Alphabetically</a>
                    <a onClick={sortRadius} className="dropdown-item" href="#">Radius</a>
                    <a onClick={sortDistance} className="dropdown-item" href="#">Distance from the sun</a>
                
                </div>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)}value="All">All</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Terrestrial planet">Terrestrial planet</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Gas Giant">Gas Giant</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Ice Giant">Ice Giant</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Dwarf Planet">Dwarf Planet</button>
            </div>
            </div>
        </div>
    )
}
export default Filter;