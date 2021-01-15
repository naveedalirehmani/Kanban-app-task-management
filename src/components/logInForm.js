import React,{useState} from 'react';
import './logInForm.css';
import logInSvg from '../images/shared_workspace.svg'
import Aux from '../hoc/auxiliary';

function LogInForm(props){
    const [user , setUser] = useState({
        email:"",
        password:""
    })
    function handleSubmit(){
        props.checkName(user)
    }
    function handleChange(e){
        setUser({...user,[e.target.id]: e.target.value})
    }
    return(
       <Aux>
           <img className="logInSvg"src={logInSvg} alt=""/>
           <input id="email"className="logInEmailInput" placeholder="Email" type="text" onChange={handleChange}/>
           <input id="password" className="logInPasswordInput" placeholder="Password" type="password" onChange={handleChange}/>
           <button onClick={handleSubmit}className="continueButton">Continue</button>
       </Aux>
    )
}

export default LogInForm;