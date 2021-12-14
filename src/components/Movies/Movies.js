import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";
import Loader from "react-loader-spinner";

const Movies = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");

    Promise.all([
      axios.get("http://localhost:8000/movies/now-playing"),
      axios.get("http://localhost:8000/movies/popular"),
      axios.get("http://localhost:8000/movies/upcoming"),
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

export default Movies;
