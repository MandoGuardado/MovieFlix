
import React from "react";
import "./MainDisplay.css";
import Image from 'react-bootstrap/Image'
import MovieFlixlogo from "../../icons/MovieFlixlogo.png"


function MainDisplay(props){

    const handleClick = ()  => {
        console.log(props);
    }

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