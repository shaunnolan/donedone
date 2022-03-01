import React from "react";

export default function AddTask() {
  return (
    <div>
      <form className="row g-2">
        <div className="col">
          <input
            className="form-control"
            type="text"
            placeholder="Add another task"
          ></input>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Add Task</button>
        </div>
      </form>
    </div>
  );
}
