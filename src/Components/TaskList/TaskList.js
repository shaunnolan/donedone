import React from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  return props.tasks.map((task) => (
    <Task title={task.title} description={task.description} />
  ));
}
