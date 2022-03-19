import "./AddTask.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Sherlock from "sherlockjs/sherlock";

export default function AddTask(props) {
  const [newTask, setNewTask] = useState({
    title: "",
    id: uuidv4.nil,
  });
  const [hasText, setHasText] = useState(false);

  const handleChange = (e) => {
    setNewTask((task) => {
      return {
        ...task,
        title: e.target.value,
      };
    });

    e.target.value.length > 0 ? setHasText(true) : setHasText(false);
  };

  const addTask = (e) => {
    const thisTask = Sherlock.parse(newTask.title);
    console.log(thisTask);

    const task = {
      ...newTask,
      id: uuidv4(),
      title: thisTask.eventTitle,
    };
    props.addTask(task, e);
    setNewTask({
      title: "",
      id: uuidv4.nil,
    });
  };

  return (
    <form className="row g-2 addTaskForm">
      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Add another task"
          value={newTask.title}
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-primary"
          onClick={addTask}
          disabled={!hasText}
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
