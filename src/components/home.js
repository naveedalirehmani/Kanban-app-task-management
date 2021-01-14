import React,{useState} from "react"
import './home.css'
import Aux from '../hoc/auxiliary'
import Loginform from './logInForm';
import Signupform from './signUpForm'
import Ouch1 from "../images/ouch1.png";
import Ouch2 from "../images/ouch2.png";
import Ouch3 from "../images/ouch3.png";
import Ouch6 from "../images/ouch6.png";
import vector from "../images/vectorCreator2.jpg";


function Home() {
    const [isLogInIn, isLogInBack] = useState(false);
    const [isSignInIn, isSignInBack] = useState(false);
    const logInFunction = () =>{
      isLogInBack(true)
      isSignInBack(false)
    }
    const signInFunction = () =>{
      isLogInBack(false)
      isSignInBack(true)
    }
    const logInDiv = (
    <Loginform></Loginform>
    )
    const logInHome = (
      <Aux>
        <img className="ouch1" src={Ouch1} alt=""/>
        <img className="ouch2" src={Ouch2} alt=""/>
        <img className="ouch3" src={Ouch3} alt=""/>
        <img className="ouch6" src={Ouch6} alt=""/>
      </Aux>
    )
    const signUpDiv = (
      <Signupform></Signupform>
    )
    const signUpHome = (
    <img className="vector"src={vector} alt=""/>
    )
    return (
      <section className="home">
          <div className="main">
            <div className="buttonsAlign">
            <button className="loginButton" onClick={logInFunction}>Log In</button>
            <button className="signupButton" onClick={signInFunction}>Sign Up</button>
            </div>
            <p className="title">We Are TodoMatic</p>
            <p className="intro">Regain clarity and calmness by getting all those tasks out of your head and <br/> onto your to-do list (no matter where you are or what device you use).</p>
            <div className="icons">
            <div className="left">
              {isLogInIn ? logInDiv : logInHome }
            </div>
            <div className="right">
              {isSignInIn ? signUpDiv : signUpHome }
            </div>
            </div>
          </div>
      </section>
    );
  }
  
  export default Home;
  