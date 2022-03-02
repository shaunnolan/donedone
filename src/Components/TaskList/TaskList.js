import React, { useEffect, useState } from "react";
import Task from "../Task/Task";

export default function TaskList(props) {
  return (
    props.tasks &&
    props.tasks.map((task) => {
      return <Task title={task.title} description={task.description} />;
    })
  );
}
