import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";

import Button from "../Button/Button";

const Dashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);
  const [featured, setFeatured] = useState();

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");

    Promise.all([
      axios.get("http://localhost:8000/trending"),
      axios.get("http://localhost:8000/movies/popular"),
      axios.get("http://localhost:8000/tv/popular"),
      axios.get("http://localhost:8000/movies/upcoming"),
      axios.get("http://localhost:8000/tv/on-the-air"),
      axios.get("http://localhost:8000/movies/now-playing"),


    ]).then((results) => {
      console.log(results);
      setCardList(results);
    });
  }, []);

  useEffect(() => {
    const randomMovie = () => {
      let index = Math.floor(Math.random() * (20 - 0) + 1);
      console.log(index);
      setFeatured(cardList[0]?.data.results[index]);
    };
    randomMovie();
  }, [cardList]);
  return (
    <>
      <div className='dashboard-body'>
        <div
          className='featured'
          style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0) 70%), url(${featured?.backdrop_path}) center no-repeat`,
          }}
        >
          <div className='featured-content'>
            <h2>{featured?.title || featured?.name}</h2>
            <p>{featured?.overview}</p>
            <Button text='Play' action='/play' />
          </div>
        </div>
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

export default Dashboard;
