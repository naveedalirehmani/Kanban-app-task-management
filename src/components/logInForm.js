import React from 'react';
import './logInForm.css';
import logInSvg from '../images/shared_workspace.svg'
import Aux from '../hoc/auxiliary';

function logInForm(props){
    return(
       <Aux>
           <img className="logInSvg"src={logInSvg} alt=""/>
           <input className="emailInput" placeholder="Email" type="text"/>
           <input className="passwordInput" placeholder="Password" type="password"/>
           <button className="continueButton">Continue</button>
       </Aux>
    )
}

export default logInForm;