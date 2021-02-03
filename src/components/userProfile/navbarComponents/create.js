import React, { useState } from "react";
import "./create.css";
import logInSvg from "../../../images/project_completed.svg";

function Create(props) {
    let createdDate = new Date();
    const [data, setData] = useState({
        taskName: "",
        task: "",
        priority:"high",
        id: null,
        userId: localStorage.current_login_user,
        createdDate: createdDate,
        tags:[],
        remindDate:""
    });

    function handleSubmit(e) {
        props.enable(0)
        e.preventDefault()
        props.setUserProfiledata({...data,id:Math.floor(Math.random()*100000)} )
    }
    function inputValue(e) {
        setData({...data,[e.target.id]: e.target.value})
    }

    return (

        <div className="create">
            <form className="createForm" action="">
                <p>Add A Task</p>
                <input id="taskName" onChange={inputValue} type="text" className="name" placeholder="Add Task title Here" />
                <input
                    id="task"
                    onChange={inputValue}
                    type="text"
                    className="task"
                    placeholder=" EXAMPLE.... Get Pastries From The Store #Task 9"
                />
                <div className="taskButtons">
                    <button className="add" onClick={handleSubmit}>Add</button>
                    <p>Set Priority</p>
                <select id="priority" onChange={inputValue}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                </div>
            </form>
            <div className="svgAddTask">
                <img src={logInSvg} alt="" />
            </div>
            <span className="dropCreate"></span>
            <span onClick={()=>{props.enable(0)}} className="closeButton">X</span>
        </div>
    );
}

export default Create
