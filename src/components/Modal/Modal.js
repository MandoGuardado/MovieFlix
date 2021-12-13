import React from "react";
import { Modal, Button } from "react-bootstrap";

const CardModal = (props) => {
  const { data } = props;
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {data?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Synopsis</h4>
        <p>{data.overview}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
