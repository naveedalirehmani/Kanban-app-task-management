import './App.css';
import React,{useState} from 'react';
import Aux from './hoc/auxiliary'
import Loginform from './components/logInForm'
import Ouch1 from "./images/ouch1.png";
import Ouch2 from "./images/ouch2.png";
import Ouch3 from "./images/ouch3.png";
import Ouch6 from "./images/ouch6.png";
import vector from "./images/vectorCreator2.jpg";

function App() {
  const [isLogInIn, isOnHome] = useState(false);
  const loginfunction = () =>{
    isOnHome(true)
  }
  const logInDiv = (
  <Loginform></Loginform>
  )
  const onHome = (
    <Aux>
      <img className="ouch1" src={Ouch1} alt=""/>
      <img className="ouch2" src={Ouch2} alt=""/>
      <img className="ouch3" src={Ouch3} alt=""/>
      <img className="ouch6" src={Ouch6} alt=""/>
    </Aux>
  )

  
  return (
    <section className="home">
        <div className="main">
          <div className="buttonsAlign">
          <button className="loginButton" onClick={loginfunction}>Log In</button>
          <button className="signupButton">Sign Up</button>
          </div>
          <p>We Are TodoMatic <br/>Bring your team together, Choose a better way to work.</p>
          <div className="icons">
          <div className="left">
            {isLogInIn ? logInDiv : onHome }
          </div>
          <div className="right">
            <img className="vector"src={vector} alt=""/>
          </div>
          </div>
        </div>
    </section>
  );
}

export default App;
