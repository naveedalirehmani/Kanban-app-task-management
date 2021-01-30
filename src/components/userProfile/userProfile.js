import React, { useState, useEffect } from "react";
import "./userProfiles.css";
import Create from "./navbarComponents/create";
import SortBy from "./navbarComponents/sortBy";
import Profile from "./navbarComponents/profile";
import Notification from './notifications'
import Todo from "./todo"
import Navbar from "./navbar";

function User(props) {
  // SETTING USERPROFILEDATA IN LOCAL STORAGE -----------------------------------------------
  const [userProfileData, setUserProfileData] = useState([]);
  useEffect(() => {
    setUserProfileData(
      JSON.parse(localStorage.userProfileData || `[]`)
      );
    }, []);

    function fUserProfileData(data) {
      let arr = [...userProfileData, data];
      setUserProfileData(arr)
      localStorage.setItem("userProfileData", JSON.stringify(arr));
    }
    const specificUserData = userProfileData.filter((element) => {
      return element.userId === localStorage.current_login_user
    })
    // DELETEING TASKS AND EDITING----------------------------------------------------------------
    function deleteTask(para){
      const updatedUserProfileData = userProfileData.filter((element)=>{
        return (element.id != para)
      })
      localStorage.setItem("userProfileData", JSON.stringify(updatedUserProfileData));
      setUserProfileData(updatedUserProfileData)
    }
    function changeTaskName(id,newTask){
      const index = userProfileData.findIndex(e => e.id === id)
      let newTasks = [...userProfileData]
      newTasks[index].task = newTask
      setUserProfileData(newTasks)
      localStorage.setItem("userProfileData", JSON.stringify(newTasks));
    }
    
    // SORTING OF ARRAYS ----------------------------------------------------------------
    
  const [view, setView] = useState('default')
  const high = specificUserData.filter(element => element.priority == "high")
  const medium = specificUserData.filter(element => element.priority == "medium")
  const low = specificUserData.filter(element => element.priority == "low")
  const highmediumlow = [].concat(high, medium, low);
  const lowmediumhigh = [].concat(low, medium, high);
  let list = [];
  if (view === "default") {list = specificUserData} 
  else if (view == "high_priority") {list = highmediumlow} 
  else if (view == "low_priority") {list = lowmediumhigh
  }
  // RENDERING USER TODO LIST ----------------------------------------------------------------
  const taskList = list.map((element) => {
    return (<Todo
      id={element.id}
      priority={element.priority}
      name={element.taskName} 
      task={element.task}
      remindDate={element.remindDate}
      createdDate={element.createdDate}
      deleteTask={deleteTask}
      changeTaskName={changeTaskName} 
      remindmeDate={remindMeDate}
      changePriority={changePriority}
      />);
  });
  // CONDITIONAL RENDERING OF THE CONTENT EDITING SCREENS ------------------------------------
  let [content, setContent] = useState(false);
  // SETTING UP REMIND ME DATE ---------------------------------------------------------------
  function remindMeDate(id,remindDate){
    console.log(remindDate, "remindDate")
    const index = userProfileData.findIndex(e => e.id === id)
    let date = [...userProfileData]
    date[index].remindDate = remindDate;
    setUserProfileData(date)
     console.log(date,"sdasdasda")
    localStorage.setItem("userProfileData", JSON.stringify(date));
  }
  //CHANGING PRIORIOTY ------------------------------------------------------------------------
  function changePriority(id,priority){
    const index = userProfileData.findIndex(e => e.id === id)
    let setPriority = [...userProfileData]
    let checkPriority = setPriority[index].priority
    if (checkPriority == "high"){setPriority[index].priority = "medium";}
    else if (checkPriority == "medium"){setPriority[index].priority = "low";}
    else if (checkPriority == "low"){setPriority[index].priority = "high";}
    setUserProfileData(setPriority)
    localStorage.setItem("userProfileData", JSON.stringify(setPriority));
  }
  // RETURN -----------------------------------------------------------------------------------
  return (
    <section className="dashboard">
      <Navbar enable={element => setContent(element)} userObject={props.userObject}></Navbar>
      <div className="content">
        {(content == 1) ? <Notification></Notification> : null}
        {(content == 2) ? <Create setUserProfiledata={fUserProfileData} enable={element => setContent(element)}></Create> : null}
        {(content == 4) ? <SortBy enable={element => setContent(element)} sort={element => setView(element)}></SortBy> : null}
        {(content == 5) ? <Profile enable={element => setContent(element)}></Profile> : null}
        {taskList}
      </div>
    </section>
  );
}

export default User;
