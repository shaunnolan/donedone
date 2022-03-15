import React, { useEffect } from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  return (
    <div className="row masonry-grid">
      {props.tasks.map((task) => (
        <Task
          key={task.title}
          id={task.title}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
}
