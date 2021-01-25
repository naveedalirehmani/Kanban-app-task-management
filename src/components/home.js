import React, { useState, useEffect } from "react";
import "./home.css";
import Aux from "../hoc/auxiliary";
import Loginform from "./logInForm";
import Signupform from "./signUpForm";
import Ouch1 from "../images/ouch1.png";
import Ouch2 from "../images/ouch2.png";
import Ouch3 from "../images/ouch3.png";
import Ouch6 from "../images/ouch6.png";
import vector from "../images/vectorCreator2.jpg";
import { useHistory } from "react-router-dom";

function Home(props) {
  //PUSHING USER DATA INTO THE ARRAY-------------------------------------------------------------
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  const addUser = (data) => {
    const filter = userData.filter((element) => element.name == data.name);
    if (filter.length > 0) {
      alert("Name taken");
      return false;
    } else {
      setUserData([...userData, data]);
    }
    return true;
  };
  //LOCAL STORAGE SETING DATA--------------------------------------------------------------------
  useEffect(() => {
    setUserData(
      JSON.parse(localStorage.userData ? localStorage.userData : `[]`)
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);
  // CONDITIONAL RENDERING LOGIN AND SIGNIN FORM--------------------------------------------------
  const [isLogInIn, isLogInBack] = useState(false);
  const [isSignInIn, isSignInBack] = useState(false);
  const logInFunction = () => {
    isLogInBack(true);
    isSignInBack(false);
  };
  const signInFunction = () => {
    isLogInBack(false);
    isSignInBack(true);
  };
  //  LOGIN RESULT CHECK AND ROUTE TO COMPONENT ------------------------------------------
  function checkName(data) {
    let result = userData.find((element) => {
      return (element.email === data.email && element.password === data.password)
    });
    if(result){
      localStorage.setItem("current_login_user", result.id);
      props.sendUserobject(result)
      history.push('/userprofile');
    }else{
      alert("incorrect credidentials")
    }
  }
  const logInDiv = <Loginform checkName={checkName}></Loginform>;
  const logInHome = (
    <Aux>
      <img className="ouch1" src={Ouch1} alt="" />
      <img className="ouch2" src={Ouch2} alt="" />
      <img className="ouch3" src={Ouch3} alt="" />
      <img className="ouch6" src={Ouch6} alt="" />
    </Aux>
  );
  const signUpDiv = (
    <Signupform addName={addUser} userData={userData}></Signupform>
  );
  const signUpHome = <img className="vector" src={vector} alt="" />;

  //RETURN------------------------------------------------------------------------------------------------------
  return (
    <section className="home">
      <div className="main">
        <div className="buttonsAlign">
          <button className="loginButton" onClick={logInFunction}>
            Log In
          </button>
          <button className="signupButton" onClick={signInFunction}>
            Sign Up
          </button>
        </div>
        <p className="title">We Are TodoMatic</p>
        <p className="intro">
          Regain clarity and calmness by getting all those tasks out of your
          head and <br /> onto your to-do list (no matter where you are or what
          device you use).
        </p>
        <div className="icons">
          <div className="left">{isLogInIn ? logInDiv : logInHome}</div>
          <div className="right">{isSignInIn ? signUpDiv : signUpHome}</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
