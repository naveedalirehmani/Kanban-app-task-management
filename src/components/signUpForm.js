import React from 'react';
import './signUpForm.css';
import signUpSvg from '../images/Work_time.svg'
import Aux from '../hoc/auxiliary';

function logInForm(props){
    return(
       <Aux>
           <div>
           <img className="signUpSvg"src={signUpSvg} alt=""/>     
           </div>
           <div>
           <input className="signUpName" placeholder="Name" type="text"/>
           <input className="signUpAge" placeholder="Age" type="number"/>
           <input className="signUpEmailInput" placeholder="Email" type="text"/>
           <input className="signUpPasswordInput" placeholder="Password" type="password"/>
           <button className="continueButton">Continue</button>
           </div>
       </Aux>
    )
}

export default logInForm;