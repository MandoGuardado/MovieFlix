import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import arrow from "../../icons/arrow.svg";
import arrowup from "../../icons/arrowup.svg";

const Button = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  if (props.action === "/signout") {
    return (
      <button className='button' onClick={handleSignOut}>
        {props.text}
      </button>
    );
  }
  if (props.action === "/play") {
    return (
      <button onClick={props.open} className='button'>
        {props.text}
      </button>
    );
  }
  return (
    <button className='button'>
      <Link to={props.action}> {props.text} </Link>
      {props.action === "/signin" ? (
        <img src={arrow} alt='arrow' />
      ) : (
        <img src={arrowup} alt='arrowup' />
      )}
    </button>
  );
};

export default Button;
