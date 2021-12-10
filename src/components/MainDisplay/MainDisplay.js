
import React from "react";
import "./MainDisplay.css";
import { Image } from "react-bootstrap";


function MainDisplay(props){

    const handleClick = ()  => {
        console.log(props);
    }

    return(
        <>
        <div className= 'container'>
            <div className='display'>
                <h1>Great movies, TV, Shows, and more!</h1>
                <h5>Watch anywhere. For Free</h5>
                <Image src="../../../MovieFlixlog.png" />
        
            </div>
            <div>
            <button onClick={handleClick} className='sign-in btn'>
            Sign up!
            </button>       
        </div>
        </div>
        </>
    );
};
export default MainDisplay;