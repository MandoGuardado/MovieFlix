import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import "./firebase";
import "./App.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignUp from "./components/Form/SignUp";
import SignIn from "./components/Form/SignIn";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import questionsData from "./components/Questions/Questions";
import Dashboard from "./components/Dashboard/Dashboard";
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

      <Router>
        <Header />
        <MainDisplay/>
        <Routes>
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signin' element={<SignIn />} />
        </Routes>
      </Router>


      <Header />
    <MainDisplay/>
      <Routes>
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/signin' element={<SignIn />} />
       
        <Route exact path='/dashboard' element={<Dashboard />} />
        {/* <Route path='*' element={<h1>NOT FOUND</h1>} /> */}
      </Routes>
    </div>
  );
};

export default App;
