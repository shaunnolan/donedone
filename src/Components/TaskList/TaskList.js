import React from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  const tasks = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        onDelete={props.onDelete}
      />
    );
  });

  return <div className="row masonry-grid">{tasks}</div>;
}
