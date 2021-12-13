import React, { useState } from "react";

import { Swiper } from "swiper/react";

import "./CardList.css";
import "swiper/swiper-bundle.css";

import Card from "../Card/Card";

const CardList = (props) => {
  return (
    <div className='card-list-container'>
      <h2>{props.category}</h2>
      <Swiper
        className='mySwiper video-list'
        slidesPerView={7}
        spaceBetween={10}
        navigation
        slidesPerGroup={6}
      >
        <div class='swiper-wrapper card-list'>
          {props.data.map((card) => (
            <Card className='' id='mySlide' info={card} />
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CardList;
