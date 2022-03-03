import "./AddTask.css";
import React, { useState } from "react";

export default function AddTask(props) {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    props.addTask(newTask, e);
    setNewTask("");
  };

  return (
    <form className="row g-2 addTaskForm">
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Add another task"
          value={newTask}
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>
    </form>
  );
}
