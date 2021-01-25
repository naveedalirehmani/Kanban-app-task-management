import React, { useState } from "react";
import "./create.css";
import logInSvg from "../../images/project_completed.svg";

function create(props) {
    let createdDate = new Date();
    const [data, setData] = useState({
        taskName: "",
        task: "",
        id: Math.random().toString(36).substring(7),
        userId: localStorage.current_login_user,
        createdDate:createdDate
    });
    function handleSubmit(e) {
        e.preventDefault()
        props.setUserProfiledata(data)
    }
    function inputValue(e) {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    function enable() {
        props.enable(0)
    }
    return (

        <div className="create">
            <form onSubmit={handleSubmit} className="createForm" action="">
                <p>Add A Task</p>
                <input id="taskName" onChange={inputValue} type="text" className="name" placeholder="Add Task Name Here" />
                <input
                    id="task"
                    onChange={inputValue}
                    type="text"
                    className="task"
                    placeholder=" EXAMPLE.... Get Pastries From The Store #Task 9"
                />
                <div className="taskButtons">
                    <button className="add">Add</button>
                    <button className="setDate">Set Date</button>
                    {/* <button className="setPriorityHigh">
                        High<span>Set Priority</span>
                    </button>
                    <button className="setPriorityMedium">
                        Medium<span>Set Priority</span>
                    </button>
                    <button className="setPriorityLow">
                        Low<span>Set Priority</span>
                    </button> */}
                </div>
            </form>
            <div className="svgAddTask">
                <img src={logInSvg} alt="" />
            </div>
            <span className="drop"></span>
            <span onClick={enable} className="closeButton">X</span>
        </div>
    );
}

export default create;
