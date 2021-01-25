import React from 'react'
import "./todo.css"
function Todo(props) {
    const d = new Date(props.createdDate)
    let [month,day,year]=[d.getMonth(),d.getDate(),d.getFullYear()]
    if(month==0){
        month="January"
    }
    console.log(month,day,year)
    return (
        <div className="taskList">
            <div className="taskData">
                <h2>{props.name}</h2>
                <p>{props.task}</p>
            </div>
            <div className="editButtons">
                <p>Created On : {day} {month} {year}------- Remind Me On : 1 september 2021</p>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </div>

    )
}

export default Todo
