import React, { useState,useEffect } from "react";
import Aux from "../../hoc/auxiliary";
import {faCommentDots,faCommentSlash,faCommentAlt,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import "./todo.css";

function Todo(props) {
  const {userProfileData, id, setUserProfileData} = props
  // CHANGEING TASK -----------------------------------------------------------------------
  const [newTask, setNewTask] = useState("");
  const [tags, setTags] = useState([""]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tagsName, setTagsName] = useState("");

  function changeTaskName(e) {
    setNewTask(e.target.value);
  }
  function submitNewTask() {
    props.changeTaskName(props.id, newTask);
    setIsEditing(false);
  }
  // CREATING A COMMENT --------------------------------------------------------------------
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleSend = () => {
    setTagsName("");
    setTags([...tags, tagsName]);
    const singleUserData = userProfileData.find(item => item.id === id)
    const update = {...singleUserData, tags: tags}
    localStorage.setItem("userProfileData", JSON.stringify([...userProfileData, update]));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
     setTags([])
     setTagsName("")
  };
  const handleEditComment =(index, item) =>{
    setTagsName(item)
  }
  const handleUpdateComment =(index)=> {
     const updateComment  = [...tags]
        updateComment[index] = tagsName
        setTags(updateComment)
        setTagsName("")
        const singleUserData = userProfileData.find(item => item.id === id)
        const update = {...singleUserData, tags: updateComment}
        localStorage.setItem("userProfileData", JSON.stringify([...userProfileData, update]));
  }
 const handleCommentDelete=(itemindex)=>{
    const remove = tags.filter((item, index) => index !== itemindex)
      setTags(remove)
      setTagsName("")
 }
  // CREATED DATE --------------------------------------------------------------------------
  const d = new Date(props.createdDate);
  let [month, day, year] = [d.getMonth(), d.getDate(), d.getFullYear()];
  if (month == 0) {
    month = "January";
  }

  // CONDITIONAL RENDERING ----------------------------------------------------------------
  const [isEdited, setIsEditing] = useState(false);
  const justView = (
    <div className="taskList">
      <div className="taskData">
        <button className="priorityButton">{props.priority}</button>
        <h2>{props.name}</h2>
        <p>{props.task}</p>
      </div>
      <div className="editButtons">
        <p>
          Created On : {day} {month} {year}------- Remind Me On : {props.remindDate}
        </p>
        <input className="selectDate" id="datePicker" type="date" onChange={(e)=>{ props.remindmeDate(props.id, e.target.value)}}/>
        <button className="comment-button" onClick={showModal}>
          <FontAwesomeIcon icon={faCommentAlt} />
        </button>
        <button className="edit" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className="delete"
          onClick={() => {
            props.deleteTask(props.id);
          }}
        >
          Delete
        </button>
      </div>
      <Modal
        className="modal"
        title="Comments"
        visible={isModalVisible}
        onOk={tagsName ? handleSend : null}
        onCancel={handleCancel}
        okText="Send"
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <input
          className="comments-input"
          id="name"
          value={tagsName}
          onChange={(e) => setTagsName(e.target.value)}
          placeholder="comment here ..."
          type="text"
        ></input>

        <div>
          {tags.map((item, index) => {
            if(item){
              return (
                <>
                <p key={index}>{item}
                  <button style={{background: '#3e3e3e'}} onClick={()=> handleEditComment(index, item)}>Edit</button> 
                  <button style={{background: '#3e3e3e'}} onClick={() => handleUpdateComment(index)}> Update</button>
                  <button style={{background: '#3e3e3e'}} onClick={() => handleCommentDelete(index)}> Deleted</button>
                </p>
              </>
            );
          }
          })}
        </div>
      </Modal>
    </div>
  );
  const editing = (
    <div className="taskList">
      <div className="taskData">
        <button className="priorityButton">{props.priority}</button>
        <h2>{props.name}</h2>
        <input
          onChange={changeTaskName}
          placeholder="Inter new task here"
          type="text"
        />
      </div>

      <div className="editButtons">
        <p>
          Created On : {day} {month} {year}------- Remind Me On : 1 september
          2021
        </p>
        <button className="edit" onClick={() => setIsEditing(false)}>
          cancel
        </button>
        <button className="edit" onClick={submitNewTask}>
          Done
        </button>
        <button
          className="delete"
          onClick={() => {
            props.deleteTask(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
  return <Aux>{isEdited ? editing : justView}</Aux>;
}

export default Todo;
