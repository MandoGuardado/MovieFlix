import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function Header(props) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) return setIsUserLoggedIn(true);

      setIsUserLoggedIn(false);

    });

    return unsubscribe;
  }, []);

  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={logo} alt='Movie icon' />
        <h1>MovieFlix </h1>
        {isUserLoggedIn && (
          <div className='nav-links'>
            <ul>
              <li>
                <Link to='/dashboard'>Home</Link>
              </li>
              <li>
                <Link to='/tvshows'>TV Shows</Link>
              </li>
              <li>
                <Link to='/movies'>Movies</Link>
              </li>
              <li>
                <Link to='/mylist'>My List</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        {isUserLoggedIn ? (
          <Button action='/signout' text='Sign Out' />
        ) : (
          <Button action='/signin' text='Sign In' />
        )}
      </div>
    </div>
  );
}

export default Header;
