import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = ({id:key}) => {
  const opts = {
    height: "500",
    width: "640",
    // https://developers.google.com/youtube/player_parameters
    //Values we can adjust to change how our videos displays
    playerVars: {
      autoplay: 0,
      controls: 1,
      fs: 1,
      modestbranding: 0
    }
  };

  return (
    <div className="video-component">
      <YouTube videoId={key} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
