import './App.css';
import Ouch1 from "./images/ouch1.png"
import Ouch2 from "./images/ouch2.png"
import Ouch3 from "./images/ouch3.png"
import Ouch6 from "./images/ouch6.png"
import vector from "./images/vectorCreator2.jpg"

function App() {
  return (
    <section className="home">
        <div className="main">
          <p>We Are TodoMatic <br/>Bring your team together, Choose a better way to work</p>
          <button className="loginButton">Sign In</button>
          <button className="signupButton">Sign Up</button>
          <div className="icons">
          <div className="left">
            <img className="ouch1" src={Ouch1} alt=""/>
            <img className="ouch2" src={Ouch2} alt=""/>
            <img className="ouch3" src={Ouch3} alt=""/>
            <img className="ouch6" src={Ouch6} alt=""/>
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
