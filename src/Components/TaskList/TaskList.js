import React, { useState } from "react";
import Task from "../Task/Task";
import TaskDetail from "../TaskDetail/TaskDetail";

export default function TaskList(props) {
  const [showDetail, setShowDetail] = useState(false);

  const handleTaskClick = (e) => {
    var taskId = e.target.closest(".card").getAttribute("taskid");
    e.preventDefault();
    console.log(taskId);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
  };

  const tasks = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        onDelete={props.onDelete}
        handleClick={handleTaskClick}
      />
    );
  });

  return (
    <>
      <div className="row masonry-grid">{tasks}</div>
      <TaskDetail show={showDetail} handleClose={handleClose} />
    </>
  );
}
