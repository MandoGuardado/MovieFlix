import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";

const MyList = (props) => {
  const { movies } = props;
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");
  }, []);

  return (
    <>
      <div className='dashboard-body'>
        <CardList
          data={movies}
          category='My Favorites'
          handleFavoriteClick={props.handleFavoriteClick}
          favoriteComponent={props.favoriteComponent}
        />
      </div>
    </>
  );
};

export default MyList;
