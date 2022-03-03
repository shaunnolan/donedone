import React from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  return (
    <div className="row" data-masonry='{"percentPosition": true}'>
      {props.tasks.map((task) => (
        <Task title={task.title} description={task.description} />
      ))}
    </div>
  );
}
