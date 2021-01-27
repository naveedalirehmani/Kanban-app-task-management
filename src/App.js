import React,{useState, useEffect} from 'react';
import Home from './components/home'
import User from './components/userProfile/userProfile'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Button } from 'antd';




function App() {
  const[userObject,setuserObject]=useState('');
  let sendUserObject =(result)=>{
    setuserObject(result)
  }
  useEffect(() => {
    const userId = localStorage.current_login_user;
    if (userId) {
      const user = JSON.parse(localStorage.userData).find((element) => element.id === userId);
      if (user) {
        setuserObject(user)
      }
    }
  }, [])
  return (
    <Router>
      <Route path="/" exact component={Home}><Home sendUserObject={sendUserObject}></Home></Route>
      <Route path="/userprofile" exact component={User}><User userObject={userObject}></User></Route>
    </Router>
  );
}

export default App;