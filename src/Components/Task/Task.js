import React from "react";

export default function Task(props) {
  const handleKeyDown = (e) => {
    if (e.keyCode === 88) {
      console.log("deleted");
    }
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <a className="task" href="#" onKeyDown={handleKeyDown} tabIndex="-1">
        <div className="card">
          <div className="card-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="card-body">
            <h5>{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
