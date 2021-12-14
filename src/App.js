import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./firebase";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignUp from "./components/Form/SignUp";
import SignIn from "./components/Form/SignIn";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import Questions from "./components/Questions/Questions";
import Dashboard from "./components/Dashboard/Dashboard";
import FooterPage from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import TvShows from "./components/TvShows/TvShows.js";
import Movies from "./components/Movies/Movies.js";
import AddFavorite from "./components/Favorites/AddFavorite.js";
import RemoveFavorite from "./components/Favorites/RemoveFavorites";
import MyList from "./components/MyList/MyList";
const hosting_url = process.env.REACT_APP_HOSTING_URL;

const App = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const { uid } = getAuth().currentUser;
        navigate("/dashboard");
        fetch(`${hosting_url}get-favorites`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fbId: uid,
          }),
        })
          .then((data) => data.json())
          .then((data) => {
            setFavorites(data);
          });
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {});

  const addFavoriteMovie = (movie) => {
    const { uid, displayName } = getAuth().currentUser;
    if (!favorites.includes(movie)) {
      const newFavoritesList = [...favorites, movie];
      // setFavorites(newFavoritesList);
      fetch(`${hosting_url}favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: displayName,
          fbId: uid,
          favMovie: newFavoritesList,
        }),
      }).then(() => {
        setFavorites(newFavoritesList);
        console.log("New Favorite has been added");
      });
    }
    else{
      console.log("Movies is already a favorite!")
    }
  };

  const removeFavoriteMovie = (movie) => {
    const { uid, displayName } = getAuth().currentUser;
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== movie.id
    );

    fetch(`${hosting_url}favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: displayName,
        fbId: uid,
        favMovie: updatedFavorites,
      }),
    }).then(() => {
      setFavorites(updatedFavorites);
      console.log("New Favorite has been added");
    });
  };

  return (
    <div className='main-container'>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <MainDisplay />
              <Questions />
              <FooterPage />
            </>
          }
        />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route
          exact
          path='/dashboard'
          element={
            <Dashboard
              handleFavoriteClick={addFavoriteMovie}
              favoriteComponent={AddFavorite}
              myList={favorites}
              removeComponent={RemoveFavorite}
              handleRemoveFavorite= {removeFavoriteMovie}
            />
          }
        />
        <Route
          exact
          path='/tvshows'
          element={
            <TvShows
              handleFavoriteClick={addFavoriteMovie}
              favoriteComponent={AddFavorite}
            />
          }
        />
        <Route
          exact
          path='/movies'
          element={
            <Movies
              handleFavoriteClick={addFavoriteMovie}
              favoriteComponent={AddFavorite}
            />
          }
        />
        <Route
          exact
          path='/mylist'
          element={
            <MyList
              movies={favorites}
              handleFavoriteClick={removeFavoriteMovie}
              favoriteComponent={RemoveFavorite}
            />
          }
        />

        {/* <Route path='*' element={<h1>NOT FOUND</h1>} /> */}
      </Routes>
      <FooterPage />
    </div>
  );
};

export default App;
