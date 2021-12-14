import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Modal from "../Modal/Modal";
import "swiper/swiper-bundle.css";

import "./Card.css";
import "../CardList/CardList.css";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const FavoriteComponent = props.favoriteComponent;
  const { info } = props;
  return (
    <>
      <Modal
        showModal={showModal}
        data={info}
        show={showModal}
        onHide={() => setShowModal(false)}
      />

      <SwiperSlide id='mySlide'>
        <div className='image-container'>
          <img
            onClick={() => setShowModal(true)}
            src={info.poster_path}
            alt='card'
          />
          <div
            onClick={() => props.handleFavoriteClick(info)}
            className='overlay'
          >
            <FavoriteComponent />
          </div>
        </div>
      </SwiperSlide>
    </>
  );
};

export default Card;
