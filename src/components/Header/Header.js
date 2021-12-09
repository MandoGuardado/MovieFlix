import React from "react";
import "./Header.css";
import logo from "../../icons/logo.svg";

function Header(props) {
  const handleClick = () => {
    console.log(props.name);
  };

  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt='Movie icon' />
        <h1>MovieFlix </h1>
      </div>
      <div>
        <button onClick={handleClick} className='btn'>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
