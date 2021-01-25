import React, { useState } from "react";
import "./signUpForm.css";
import Resume from "../images/Resume.svg";
import Aux from "../hoc/auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faGoogle,faTwitter,faApple,faAirbnb,faGithub,faGripfire} from '@fortawesome/free-brands-svg-icons' 


function LogInForm(props) {
  const [user, setUser] = useState({
    name: "",
    age: null,
    email: "",
    password: "",
    id: Math.random().toString(36).substring(7)
  });
  function handleSubmit() {
    if (user.name && user.email && user.age && user.password) {
      const a = props.addName(user);
      if (a) {
        alert("Signup done");
      } else {
        alert("signup something failed.");
      }
    } else {
      alert("All fields are required to be filled out");
    }
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }
  return (
    <Aux>
      <div>
        <img className="signUpSvg" src={Resume} alt="" />
      </div>
      <div className="borderDiv">
      <div className="social">
        <button ><FontAwesomeIcon icon={faApple}></FontAwesomeIcon></button>
        <button ><FontAwesomeIcon icon={faAirbnb}></FontAwesomeIcon></button>
        <button ><FontAwesomeIcon icon={faGripfire}></FontAwesomeIcon></button>
        <p>Use Your Email For Registration</p>
      </div>
        <input
          id="name"
          className="signUpName"
          placeholder="Name"
          type="text"
          onChange={handleChange}
        />
        <input
          id="age"
          className="signUpAge"
          placeholder="Age"
          type="number"
          onChange={handleChange}
        />
        <input
          id="email"
          className="signUpEmailInput"
          placeholder="Email"
          type="text"
          onChange={handleChange}
        />
        <input
          id="password"
          className="signUpPasswordInput"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="continueButton">
          Continue
        </button>
      </div>
    </Aux>
  );
}

export default LogInForm;
