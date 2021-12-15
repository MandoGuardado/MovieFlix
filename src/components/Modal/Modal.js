import React from "react";
import { Modal } from "react-bootstrap";
import YouTubeVideo from "../YouTube/YouTubeVideo";
import "./Modal.css";
const CardModal = (props) => {
  const {
    videos: { results },
  } = props.data;
  const { data } = props;

  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {data?.title || data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Synopsis</h4>
        <p>{data.overview}</p>
      </Modal.Body>
      <Modal.Body className='modal-yt-body'>
        <div className='you-tube-video'>
          {<YouTubeVideo id={results[0]?.key} />}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <ul>
            Genres:
            {data.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
