import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";
import Loader from "react-loader-spinner";

const TvShows = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");

    Promise.all([
      axios.get("http://localhost:8000/tv/popular"),
      axios.get("http://localhost:8000/tv/top-rated"),
      axios.get("http://localhost:8000/tv/on-the-air"),
    ]).then((results) => {
      console.log(results);
      setCardList(results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div class='loader'>
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
          <CardList
            key={index}
            data={list.data.results}
            category={list.data.category}
          />
        ))}
      </div>
    </>
  );
};

export default TvShows;
