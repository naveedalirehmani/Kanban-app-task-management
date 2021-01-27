import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import Aux from "../../hoc/auxiliary"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
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
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log("showmodal");
    setIsModalVisible(true);
  };

  const handleSend = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const justView = (
        <div className="taskList">
            <div className="taskData">
                <button className="priorityButton">{props.priority}</button>
                <h2>{props.name}</h2>
                <p>{props.task}</p>
            </div>
            <div className="editButtons">
                <p>Created On : {day} {month} {year}------- Remind Me On : 1 september 2021</p>
                <span className="comment-icon">
          <FontAwesomeIcon
            icon={faCommentDots}
            onClick={showModal}
          ></FontAwesomeIcon>
        </span>
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
            <div className="modal">
<Modal
  className="modal"
  title="Comments"
  visible={isModalVisible}
  onSend={handleSend}
  onCancel={handleCancel}
  okText="Send"
  cancelButtonProps={{ style: { display: "none" } }}
>
  <input
    className="comments-input"
    id="name"
    placeholder="comment here ..."
    type="text"
  ></input>
</Modal>
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
