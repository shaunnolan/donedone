import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import Masonry from "masonry-layout";

function DynamicTaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const oldTasks = JSON.parse(localStorage.getItem("tasks"));

    if (oldTasks) setTasks(oldTasks);
    else setTasks([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const masonry = new Masonry(".masonry-grid");
    masonry.layout();
  }, [tasks]);

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
