import React from 'react'
import "./profile.css"
function profile(props) {
    return (
        <div className="userProfile">
            <h1>This is the user profile</h1>
            <span className="dropUserProfile"></span>
            <span onClick={()=>{props.enable(0)}} className="closeButtonUserProfile">X</span>
        </div>
    )
}

export default profile;
