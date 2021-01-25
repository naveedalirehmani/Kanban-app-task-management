import React,{useState,useEffect} from "react";
import "./userProfiles.css";
import Create from "./create";
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
    function fUserProfileData(data){
      let arr = [...userProfileData , data];
      setUserProfileData(arr)
      localStorage.setItem("userProfileData", JSON.stringify(arr));
    }
// RENDERING USER TODO LIST ----------------------------------------------------------------
    const taskList = Array.isArray(userProfileData) && userProfileData.map((element) => {
      return (<Todo name={element.taskName} task={element.task} createdDate={element.createdDate}/>);
    });
// CONDITIONAL RENDERING OF THE CONTENT EDITING SCREENS ------------------------------------
  let [content,setContent]=useState(false);
  function enable(element){
    if(element == 0){setContent(0)}
    if (element === 1){setContent(1)}
    else if(element === 2){setContent(2)}
    return content;
  }
// RETURN -----------------------------------------------------------------------------------
  return (
    <section className="dashboard">
      <Navbar enable={enable} userObject={props.userObject}></Navbar>
      <div className="content">
      {(content ==1 ) ? <Notification></Notification> : null}
      {(content ==2 ) ? <Create setUserProfiledata={fUserProfileData} enable={enable}></Create> : null}
        {taskList}
      </div>
    </section>
  );
}

export default User;
