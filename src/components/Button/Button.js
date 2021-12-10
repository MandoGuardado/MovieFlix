import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
      <button className='btn' onClick={handleSignOut}>
        {props.text}
      </button>
    );
  }
  return (
    <button className='btn'>
      <Link to={props.action}> {props.text} </Link>
    </button>
  );
};

export default Button;
