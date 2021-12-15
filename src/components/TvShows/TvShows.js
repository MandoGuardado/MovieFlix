import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";
import Loader from "react-loader-spinner";
const hosting_url = process.env.REACT_APP_HOSTING_URL;

const TvShows = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");

    Promise.all([
      axios.get(`${hosting_url}tv/popular`),
      axios.get(`${hosting_url}tv/top-rated`),
      axios.get(`${hosting_url}tv/on-the-air`),
    ]).then((results) => {
      console.log(results);
      setCardList(results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className='loader'>
        <Loader
          type='BallTriangle'
          color='#00BFFF'
          height={80}
          width={80}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }

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
