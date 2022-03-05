import Masonry from "masonry-layout";
import React, { useEffect } from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  useEffect(() => {
    const masonry = new Masonry(".masonry-grid");
    masonry.layout();
  });

  return (
    <div className="row masonry-grid">
      {props.tasks.map((task) => (
        <Task title={task.title} description={task.description} />
      ))}
    </div>
  );
}
