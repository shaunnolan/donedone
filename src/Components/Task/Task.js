import React from "react";

export default function Task(props) {
  const handleKeyDown = (e) => {
    if (e.keyCode === 88) {
      props.onDelete(props.id, e);
    }
  };

  const focusTask = (e) => {
    e.stopPropagation();
    const taskTitle = e.target.querySelector(".task-title");
    taskTitle.focus();
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="card">
        <div className="card-body" onMouseEnter={focusTask}>
          <a
            className="task-title"
            href="#"
            onKeyDown={handleKeyDown}
            tabIndex="-1"
          >
            <h6>{props.title}</h6>
            <p className="card-text">{props.description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
