import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CardList from "../CardList/CardList";

const Movies = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [cardList, setCardList] = useState([]);


    useEffect(() => {
        if (!auth.currentUser) return navigate("/");


        Promise.all([
            axios.get("http://localhost:8000/movies/now-playing"),
            axios.get("http://localhost:8000/movies/popular"),
            axios.get("http://localhost:8000/movies/upcoming"),

        ]).then((results) => {
            console.log(results);
            setCardList(results);
        });
    }, []);

    return (
        <>
            <div className='dashboard-body'>
                {cardList.map((list, index) => (
                    <CardList key={index} data={list.data.results} category={list.data.category} />
                ))}
            </div>
        </>
    );
};

export default Movies;
