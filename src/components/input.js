import React from "react";


export default input (props) => {
    
    return(
        <div>
            <input type="{ type }" onChange={(val) => handleChange(val)} className={className}/>
        </div>
    )
}