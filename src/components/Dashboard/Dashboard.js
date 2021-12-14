import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";
import Loader from "react-loader-spinner";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
const hosting_url = process.env.REACT_APP_HOSTING_URL;

const Dashboard = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cardList, setCardList] = useState([]);
  const [featured, setFeatured] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");

    Promise.all([
      axios.get(`${hosting_url}trending`),
      axios.get(`${hosting_url}movies/popular`),
      axios.get(`${hosting_url}tv/popular`),
      axios.get(`${hosting_url}movies/upcoming`),
      axios.get(`${hosting_url}tv/on-the-air`),
      axios.get(`${hosting_url}movies/now-playing`),
    ]).then((results) => {
      setCardList(results);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const randomMovie = () => {
      let index = Math.floor(Math.random() * (20 - 0) + 1);
      setFeatured(cardList[0]?.data.results[index]);
    };
    randomMovie();
  }, [cardList]);

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
        <Modal
          showModal={showModal}
          data={featured}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
        <div
          className='featured'
          style={{
            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0) 70%), url(${featured?.backdrop_path}) center no-repeat`,
          }}
        >
          <div className='featured-content'>
            <h2>{featured?.title || featured?.name}</h2>
            <p>{featured?.overview}</p>
            <Button
              open={() => setShowModal(true)}
              text='Play'
              action='/play'
            />
          </div>
        </div>
        {cardList.map((list, index) => (
          <CardList
            key={index}
            data={list.data.results}
            category={list.data.category}
            handleFavoriteClick={props.handleFavoriteClick}
            favoriteComponent={props.favoriteComponent}
          />
        ))}
        <CardList
          data={props.myList}
          category='My List'
          handleFavoriteClick={props.handleRemoveFavorite}
          favoriteComponent={props.removeComponent}
        />
      </div>
    </>
  );
};

export default Dashboard;
