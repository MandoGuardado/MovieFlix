import React, { useEffect } from "react";
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
import TvShows from "./components/TvShows/TvShows.js";
import Movies from "./components/Movies/Movies.js";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return unsubscribe;
  }, []);

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
            </>
          }
        />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/tvshows' element={<TvShows />} />
        <Route exact path='/movies' element={<Movies />} />

        {/* <Route path='*' element={<h1>NOT FOUND</h1>} /> */}
      </Routes>
      <FooterPage />
    </div>
  );
};

export default App;
