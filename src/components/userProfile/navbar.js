import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import maleProfilePicture from "../../images/maleProfile2.jpg";
import {faHome,faCamera,faFolder,faInbox,faBell,faPlus,faUser,faQuestionCircle,faSearch,faServer} from "@fortawesome/free-solid-svg-icons";

function navbar(props) {
    function enable(element){
        console.log(element)
        if(element == 1){props.enable(1)}
        else if (element ==2  ){props.enable(2)}
    }
  return (
    <nav className="navbar">
      <div className="Title">TodoMatic</div>
      <div className="search">
        <input id="search-bar" type="text" placeholder="Search"></input>
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </div>
      </div>
      <div className="buttons">
        <button onClick={()=>{enable(1)}}>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          <span>Notifications</span>
        </button>
        <button onClick={()=>{enable(2)}}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          <span>Create</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          <span>Home</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
          <span>Sort-By</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <span>Profile</span>
        </button>
      </div>
      <div className="profile">
        <p>{props.userObject.email}</p>
        <img src={maleProfilePicture} alt="" className="profileImage" />
      </div>
    </nav>
  );
}

export default navbar;
