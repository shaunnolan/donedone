import React, { useEffect, useState } from "react";
import Task from "../Task/Task";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {
      title: "Task #1",
      description: "The description for task #1",
    },
    {
      title: "Task #2",
      description: "The description for task #2",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  return tasks.map((task) => {
    return <Task title={task.title} description={task.description} />;
  });
}
