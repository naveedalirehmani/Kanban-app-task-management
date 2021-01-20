import React,{useState} from 'react';
import Home from './components/home'
import User from './components/userProfile'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Button } from 'antd';


function App() {
  const[userObject,setuserObject]=useState('');
  let sendUserobject =(result)=>{
    setuserObject(result)
  }
  return (
    <Router>
      <Route path="/" exact component={Home}><Home sendUserobject={sendUserobject}></Home></Route>
      <Route path="/userprofile" exact component={User}><User userObject={userObject}></User></Route>
    </Router>
  );
}

export default App;