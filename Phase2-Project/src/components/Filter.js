import React from 'react'
import info from '../db.json'
import { useState } from 'react'

function Filter({setType, showAll}){
    

    return (
        <div>
            <div className="filter-btns" className="btns">
                <button className="filter-btns" onClick={(e) => setType(e.target.value)}value="All">All</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Terrestrial planet">Terrestrial planet</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Gas Giant">Gas Giant</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Ice Giant">Ice Giant</button>
                <button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Dwarf Planet">Dwarf Planet</button>
            </div>
        </div>
    )
}
export default Filter;