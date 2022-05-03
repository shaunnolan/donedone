import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function TaskDetail(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.task.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="form-floating">
          <textarea
            name="description"
            type="textarea"
            value={props.task.description}
            onChange={props.onChange}
            className="form-control"
            rows="3"
          ></textarea>
          <label htmlFor="taskDescription">Description</label>
        </div>
      </Modal.Body>
    </Modal>
  );
}
