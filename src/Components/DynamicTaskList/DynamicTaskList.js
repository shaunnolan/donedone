import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";

function DynamicTaskList() {
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

  const addTask = (task, e) => {
    e.preventDefault();

    setTasks((oldTasks) => {
      return [
        ...oldTasks,
        {
          title: task,
        },
      ];
    });
  };

  return (
    <>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default DynamicTaskList;
