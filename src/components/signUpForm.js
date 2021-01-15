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
  function handleSubmit(e) {
    e.preventDefault();
    props.addName(user);
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }
  return (
    <Aux>
      <form onSubmit={handleSubmit} action="">
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
          <button type="submit" className="continueButton">
            Continue
          </button>
        </div>
      </form>
    </Aux>
  );
}

export default LogInForm;
