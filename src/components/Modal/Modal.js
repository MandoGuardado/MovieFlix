import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import YouTubeVideo from "../YouTube/YouTubeVideo"
const CardModal = (props) => {
  const { videos: { results } } = props.data
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
        <container>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10} >
              <div className="you-tube-video">
                {results.length > 0 && <YouTubeVideo id={results[0].key} />}
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </container>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
