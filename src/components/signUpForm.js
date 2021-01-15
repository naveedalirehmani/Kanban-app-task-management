import React, { useState } from "react";
import "./signUpForm.css";
import signUpSvg from "../images/Working.svg";
import Aux from "../hoc/auxiliary";

function LogInForm(props) {
  const [user, setUser] = useState({
    name: "",
    age: null,
    email: "",
    password: "",
  });
  function handleSubmit() {
    props.addName(user);
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }
  return (
    <Aux>
        <div>
          <img className="signUpSvg" src={signUpSvg} alt="" />
        </div>
        <div className="borderDiv">
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
