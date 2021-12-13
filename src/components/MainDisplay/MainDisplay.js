import React from "react";
import "./MainDisplay.css";

import Image from "react-bootstrap/Image";
import MovieFlixlogo from "../../icons/MovieFlixlogo.png";
import Questions from "../Questions/Questions";



function MainDisplay(props) {
  const handleClick = () => {
    console.log(props);
  };

<<<<<<< HEAD
    return(
        <>
       
            <div className='display'>
                <div className='display-left'>
                <h1>Great movies, TV Shows, and more!</h1>
                <h4>Watch anywhere. For Free</h4>
                <button onClick={handleClick} className='sign-up'>
                  Sign up!
                </button>   
                </div>
                <div className='Movielogo'>
                <Image alt="MovieFlixlogo" className="MovieFlix" src= {MovieFlixlogo} fluid />
                </div> 
            </div>
            <div>  
        </div>
        
        </>
    );
};
export default MainDisplay;
=======

  return (
    <>
      <div className='container'>
        <div className='display'>
          <h1>Great movies, TV Shows, and more!</h1>
          <h4>Watch anywhere. For Free</h4>
          <Image alt="MovieFlixlogo" className="MovieFlix" src={MovieFlixlogo} fluid />
        </div>
        <div>
          <button onClick={handleClick} className='sign-up'>
            Sign up!
          </button>

        </div>
        <div>
          <button onClick={handleClick} className='sign-up'>
            Sign up!
          </button>
        </div>
        {/* <div>
          <button onClick={handleClick} className='sign-in btn'>
            Sign up!
          </button>
        </div> */}
      </div>
      {/* <Questions /> */}
    </>
  );
}
export default MainDisplay;
>>>>>>> e9007746a7570b60f07697ba2370a4281c864f44
