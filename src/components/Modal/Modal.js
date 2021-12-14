import React, { useRef, useEffect, useState } from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import YouTubeVideo from "../YouTube/YouTubeVideo";
import "./Modal.css";
const CardModal = (props) => {
  const [width, setWidth] = useState("");
  const {
    videos: { results },
  } = props.data;
  const { data } = props;

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current != null) {
      setWidth(ref.current.offsetWidth);
    }
    // console.log(ref.current?.offsetWidth);
  }, [props.showModal]);

  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          {data?.title || data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Synopsis</h4>
        <p>{data.overview}</p>
      </Modal.Body>
      <Modal.Body ref={ref} className='modal-yt-body'>
        <div className='you-tube-video'>
          {<YouTubeVideo size={{ width: width }} id={results[0]?.key} />}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <ul>
            Genres:
            {data.genres.map((genre) => (
              <li>{genre.name}</li>
            ))}
          </ul>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
