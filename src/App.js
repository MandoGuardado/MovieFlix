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
<<<<<<< HEAD
import FooterPage from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
=======
import TvShows from "./components/TvShows/TvShows.js";
import Movies from "./components/Movies/Movies.js"
>>>>>>> e9007746a7570b60f07697ba2370a4281c864f44

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

     <MainDisplay/>
     <Questions/>
     <FooterPage/>

      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <MainDisplay />
            </>
          }
        />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/tvshows' element={<TvShows />} />
        <Route exact path='/movies' element={<Movies/>} />
        
        {/* <Route path='*' element={<h1>NOT FOUND</h1>} /> */}
      </Routes>
    </div>
  );
};

export default App;
