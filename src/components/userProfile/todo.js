import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import Aux from "../../hoc/auxiliary"
import "./todo.css"
function Todo(props) {
    const [isEdited, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState("")
    function changeTaskName(e) {
        // console.log(e.target.value)
        setNewTask(e.target.value)
    }
    function submitNewTask() {
        props.changeTaskName(props.id, newTask);
        setIsEditing(false)
    }
    const d = new Date(props.createdDate)
    let [month, day, year] = [d.getMonth(), d.getDate(), d.getFullYear()]
    if (month == 0) {
        month = "January"
    }
    const justView = (
        <div className="taskList">
            <div className="taskData">
                <button className="priorityButton">{props.priority}</button>
                <h2>{props.name}</h2>
                <p>{props.task}</p>
            </div>
            <div className="editButtons">
                <p>Created On : {day} {month} {year}------- Remind Me On : 1 september 2021</p>
                <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="delete" onClick={() => { props.deleteTask(props.id) }}>Delete</button>
            </div>
        </div>
    )
    const editing = (
        <div className="taskList">
            <div className="taskData">
                <button className="priorityButton">{props.priority}</button>
                <h2>{props.name}</h2>
                <input onChange={changeTaskName} placeholder="Inter new task here" type="text" />
            </div>
            <div className="editButtons">
                <p>Created On : {day} {month} {year}------- Remind Me On : 1 september 2021</p>
                <button className="edit" onClick={() => setIsEditing(false)}>cancel</button>
                <button className="edit" onClick={submitNewTask}>Done</button>
                <button className="delete" onClick={() => { props.deleteTask(props.id) }}>Delete</button>
            </div>
        </div>
    )
    return (
        <Aux>
            {isEdited ? editing : justView}
        </Aux>
    )
}

export default Todo
