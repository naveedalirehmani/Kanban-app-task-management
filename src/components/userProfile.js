import React from "react";
import "./userProfiles.css";
import maleProfilePicture from "../images/maleProfile3.jpg";
import logInSvg from "../images/project_completed.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCamera,
  faFolder,
  faInbox,
  faBell,
  faPlus,
  faUser,
  faQuestionCircle
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
          <input placeHolder="   Search" type="text">
          </input>
          </div>
        <div className="buttons">
          <button><FontAwesomeIcon icon={faBell}></FontAwesomeIcon><span>Notifications</span></button>
          <button><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span>Create</span></button>
          <button><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><span>Home</span></button>
          <button><FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon><span>Help</span></button>
          <button><FontAwesomeIcon icon={faUser}></FontAwesomeIcon><span>Profile</span></button>
        </div>
        <div className="profile">
          <p>{props.userObject.email}</p>
          <img src={maleProfilePicture} alt="" className="profileImage" />
        </div>
      </nav>
      <div className="content">
        <div className="create">
          <form action="">
            <p>Add A Task</p>
            <input type="text" className="name"placeholder="Add Task Name Here"/>
            <input type="text" className="task"placeholder=" EXAMPLE:.... Get Pastries From The Store #Task 9"/>
            <div className="taskButtons">
            <button className="add">Add</button>
            <button className="setDate">Set Date</button>
            <button className="setPriorityHigh">High</button>
            <button className="setPriorityMedium">Medium</button>
            <button className="setPriorityLow">Low</button>
            </div>
          </form>
            <div className='svgAddTask'>
              <img src={logInSvg} alt=""/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default User;
