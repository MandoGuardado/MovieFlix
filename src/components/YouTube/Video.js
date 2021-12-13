import React from "react";
import YouTube from "react-youtube";

const VideoComponent = ({ youTubeKey }) => {
  const opts = {
    height: "500",
    width: "640",
    // https://developers.google.com/youtube/player_parameters
    //Values we can adjust to change how our videos displays
    playerVars: {
      autoplay: 1,
      controls: 1,
      fs: 1,
      modestbranding: 0
    }
  };

  return (
    <div className="video-component">
      <YouTube videoId={youTubeKey} opts={opts} />
    </div>
  );
};

export default VideoComponent;
