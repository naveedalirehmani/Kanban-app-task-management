import React, { useState } from "react";
import "./logInForm.css";
import logInSvg from "../images/shared_workspace.svg";
import Aux from "../hoc/auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faGoogle,faTwitter,faApple,faAirbnb,faGithub,faGripfire} from '@fortawesome/free-brands-svg-icons' 
import { Link } from "react-router-dom";

function LogInForm(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleSubmit() {
    props.checkName(user);
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }
  return (
    <Aux>
      <img className="logInSvg" src={logInSvg} alt="" />
      <div className="social">
        <button ><FontAwesomeIcon icon={faApple}></FontAwesomeIcon></button>
        <button><FontAwesomeIcon icon={faAirbnb}></FontAwesomeIcon></button>
        <button><FontAwesomeIcon icon={faGripfire}></FontAwesomeIcon></button>
      </div>
      <p>Enter Your Credential</p>
      <input
        id="email"
        className="logInEmailInput"
        placeholder="Email"
        type="text"
        onChange={handleChange}
      />
      <input
        id="password"
        className="logInPasswordInput"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="continueButton">
        Continue
      </button>
    </Aux>
  );
}

export default LogInForm;
