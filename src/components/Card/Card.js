import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Modal from "../Modal/Modal";
import "swiper/swiper-bundle.css";

import "./Card.css";
import "../CardList/CardList.css";

const Card = ({ info }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal data={info} show={showModal} onHide={() => setShowModal(false)} />

      <SwiperSlide id='mySlide'>
        <img
          onClick={() => setShowModal(true)}
          src={info.poster_path}
          alt='card'
        />
      </SwiperSlide>
    </>
  );
};

export default Card;