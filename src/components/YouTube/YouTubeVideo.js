import React from "react";
import YouTube from "react-youtube";
import "./YouTube.css";

const YouTubeVideo = ({ id: key }) => {
  const opts = {
    height: "600px",
    // // height: "",
    // width: "1100px",
    // https://developers.google.com/youtube/player_parameters
    //Values we can adjust to change how our videos displays
    playerVars: {
      autoplay: 1,
      controls: 1,
      fs: 1,
      modestbranding: 0,
    },
  };

  return (
    <div className='video-component'>
      <YouTube className='ytVideo' videoId={key} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
