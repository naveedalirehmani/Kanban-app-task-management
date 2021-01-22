import React from "react";
import "./userProfiles.css";
import maleProfilePicture from "../images/profileFemale.jpg";
// import Background from "../images/9.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCamera,
  faFolder,
  faInbox,
  faBell,
  faPlus,
  faUser,
  faQuestionCircle,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faApple,
  faAirbnb,
  faGithub,
  faGripfire,
} from "@fortawesome/free-brands-svg-icons";

function User(props) {
  console.log(props.userObject);
  return (
     <section className="dashboard">
       <nav className="navbar">
         <div className="Title">TODOMATIC</div>
         <div className="search">
           <input id="search-bar" 
            type="text"
            placeholder="Search" ></input>
            <div className="search-icon">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
        <div className="buttons">
          <button><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></button>
          <button><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
          <button><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></button>
          <button><FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon></button>
          <button><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></button>
        </div>
        <div className="profile">
          <p>{props.userObject.name}</p>
          <img src={maleProfilePicture} alt="" className="profileImage" />
        </div>
      </nav>
      <div className="content">

      </div>
    </section>
  );
}

export default User;
