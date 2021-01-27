import React from 'react'
import './sortBy.css'

function sortBy(props) {

    return (
        <div className="sortBy">
            <button onClick={()=>{props.sort("high_priority")}}>Priority High-Low</button>
            <button onClick={()=>{props.sort("low_priority")}}>Priority Low-High</button>
            <span className="dropSortBy"></span>
            <span onClick={()=>{props.enable(0)}} className="closeButton">X</span>
        </div>
    )
}

export default sortBy
