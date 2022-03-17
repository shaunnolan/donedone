import React from "react";

export default function Task(props) {
  const handleKeyDown = (e) => {
    if (e.keyCode === 88) {
      props.onDelete(props.id, e);
    }
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <a className="task" href="#" onKeyDown={handleKeyDown} tabIndex="-1">
        <div className="card">
          <div className="card-body">
            <h5>{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p>{props.id}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
