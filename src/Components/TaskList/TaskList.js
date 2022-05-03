import React, { useEffect, useState } from "react";
import Task from "../Task/Task";
import TaskDetail from "../TaskDetail/TaskDetail";

export default function TaskList(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  const handleTaskClick = (e) => {
    var taskId = e.target.closest(".card").getAttribute("taskid");
    var selectedTask = props.tasks.find((t) => t.id === taskId);

    e.preventDefault();
    setSelectedTask(selectedTask);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
  };

  const onTaskChange = (e) => {
    setSelectedTask((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    props.onUpdate(selectedTask);
  }, [selectedTask]);

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
      <TaskDetail
        show={showDetail}
        handleClose={handleClose}
        task={selectedTask}
        onChange={onTaskChange}
        onUpdate={props.onUpdate}
      />
    </>
  );
}
