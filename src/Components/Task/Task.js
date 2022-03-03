import React from "react";

export default function Task(props) {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5>{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
