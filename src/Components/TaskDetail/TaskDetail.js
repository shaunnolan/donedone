import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function TaskDetail(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.task.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>task detail goes here...</p>
      </Modal.Body>
    </Modal>
  );
}
