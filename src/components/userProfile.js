import React from 'react';
import './userProfiles.css';
import maleProfilePicture from "../images/profileFemale.jpg"
// import Background from "../images/9.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faCamera,faFolder,faInbox,faBell} from "@fortawesome/free-solid-svg-icons";


function User(props) {
  console.log(props.userObject)
  return (
    <section className='profile'>
      <div className="userData">
        <div className="notification">
          <p>TodoMatic<FontAwesomeIcon icon={faHome}></FontAwesomeIcon><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></p>
        </div>
        <div className="profileData">
          <img className="profilePicture" src={maleProfilePicture} alt=""/>
          <h3>{props.userObject.name}Naveed Ali Rehmani</h3>
          <h4>{props.userObject.email}naveedalirehmani123@gmail.com</h4>
        </div>
        <div className="buttons">
          <button><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Dashboard</button>
          <button><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Position</button>
          <button><FontAwesomeIcon icon={faBell}></FontAwesomeIcon> Inbox</button>
          <button><FontAwesomeIcon icon={faInbox}></FontAwesomeIcon> Matches</button>
          <button><FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> Market</button>
        </div>
      </div>
      <div className="dashboard"></div>
    </section>
  );
}

export default User;
