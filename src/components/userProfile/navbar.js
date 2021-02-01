import React,{useState,useEffect} from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import maleProfilePicture from "../../images/maleProfile2.jpg";
import {faHome,faCamera,faFolder,faInbox,faBell,faPlus,faUser,faQuestionCircle,faSearch,faServer,faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function navbar(props) {
  // LOGGING OUT USER ---------------------------------------------------------------------
  const history = useHistory();
  function LogOut(){
    localStorage.setItem("current_login_user","");
    history.push('/');
  }
  // SEARCHING THROUGH THE DATA ------------------------------------------------------------
  const [searchData,setSearchData]=useState('');
  function search(e){
    setSearchData(e.target.value)
  };
  useEffect(() => {
    props.sendSearchData(searchData)
  }, [searchData])
  return (
    <nav className="navbar">
      <div className="Title">TodoMatic</div>
      <div className="search">
        <input onChange={search} id="search-bar"  type="text"  placeholder="Search"></input>
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </div>
      </div>
      <div className="buttons">
        <button onClick={()=>{props.enable(1)}}>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          <span>Notifications</span>
        </button>
        <button onClick={()=>{props.enable(2)}}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          <span>Create</span>
        </button>
        <button onClick={()=>{props.enable(3)}}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <span>Profile</span>
        </button>
        <button onClick={()=>{props.enable(4)}}>
          <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
          <span>Sort-By</span>
        </button>
        <button onClick={LogOut}>
          <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
          <span>Log Out</span>
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
