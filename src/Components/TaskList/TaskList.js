import React from "react";
import Task from "../Task/Task";
import { v4 as uuidv4 } from "uuid";

export default function TaskList(props) {
  const tasks = props.tasks.map((task) => {
    // const uniqueId = uuidv4();

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

  return (
    <div className="row masonry-grid">
      {tasks}
      {/* {props.tasks.map((task) => (
        <Task
          key={uniqueId}
          id={uniqueId}
          title={task.title}
          description={task.description}
          onDelete={props.onDelete}
        />
      ))} */}
    </div>
  );
}
