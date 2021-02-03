import React from 'react'
import "./profile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import maleProfilePicture from "../../../images/maleProfile2.jpg";

function profile(props) {
    const history = useHistory();
    function routeToHome() {
        history.push('/userProfile')
    }
    return (
        <div className="userProfile">
            <nav className="navbar">
                <div className="Title">TodoMatic</div>
                <div className="buttons">
                    <button onClick={routeToHome}>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        <span>Back To Home</span>
                    </button>
                </div>
            </nav>
            <div className="ProfileContent">
                <div className="profileImage">
                    <img src={maleProfilePicture} alt=""/>
                </div>
                <div className="profileData">
                    <h2>{props.userObject.name}</h2>
                    <h2>{props.userObject.email}</h2>
                    <h2>{props.userObject.age}</h2>
                    <h2>{props.userObject.password}</h2>
                </div>
            </div>
        </div>
    )
}

export default profile;
