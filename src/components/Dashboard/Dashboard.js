import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Modal from "../Modal/Modal";

const Dashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return navigate("/");

    const getData = async () => {
      const result = await axios.get("http://localhost:8000/testing_backend");
      console.log(result.data);
      setData(result.data);
    };
    getData();
  }, []);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} />
      <div className='dashboard-body'>
        <h2>Trending Now</h2>
        <ul className='video-list'>
          <li>
            <img
              onClick={() => setShowModal(true)}
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
          <li>
            <img
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
          <li>
            <img
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
          <li>
            <img
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
        </ul>
        <h2>Category</h2>
        <ul className='video-list'>
          <li>
            <img
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
          <li>
            <img
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
          <li>
            <img
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
          <li>
            <img
              src='https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='card'
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
