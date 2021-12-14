import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";
import SwiperDemo from "../Swiper/Swiper";

import Modal from "../Modal/Modal";

const TvShows = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");

    Promise.all([
      axios.get("http://localhost:8000/tv/popular"),
      axios.get("http://localhost:8000/tv/top-rated"),
      axios.get("http://localhost:8000/tv/on-the-air"),
    ]).then((results) => {
      console.log(results);
      setCardList(results);
    });
  }, []);

  return (
    <>
      <div className='dashboard-body'>
        {cardList.map((list, index) => (
          <CardList key={index} data={list.data.results} category={list.data.category} handleFavoriteClick={props.handleFavoriteClick}
            favoriteComponent={props.favoriteComponent} />
        ))}
      </div>
    </>
  );
};

export default TvShows;