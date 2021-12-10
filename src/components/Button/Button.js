import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className='btn'>
      <Link to={props.action}> {props.text} </Link>
    </button>
  );
};

export default Button;
