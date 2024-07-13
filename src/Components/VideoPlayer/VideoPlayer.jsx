import React, { useRef, useState, useEffect } from 'react';
import uniVideo from '../../assets/uni-video.mp4';

const VideoPlayer = ({ playVideo, playVideoSet }) => {
  // Create a ref to the video player container div
  const player = useRef(null);
  const videoElement = useRef(null);

  // Function to close the video player when clicking outside the video
  const closePlayer = (e) => {
    // Check if the clicked target is the player container itself
    if (e.target === player.current) {
      // If so, set playVideo to false to close the video player
      playVideoSet(false);
    }
  };

  // Use useEffect to handle video pause and reset when playVideo changes
  useEffect(() => {
    if (!playVideo && videoElement.current) {
      videoElement.current.pause();
      videoElement.current.currentTime = 0;
    }
  }, [playVideo]);

  return (
    <div
      className={`fixed top-0 left-0 ${playVideo ? 'flex' : 'hidden'} items-center justify-center z-30 h-full w-full bg-[rgba(0,0,0,0.9)]`}
      ref={player} // Attach the ref to the div
      onClick={closePlayer} // Attach the click handler to the div
    >
      <video
        src={uniVideo}
        autoPlay
        muted
        controls
        ref={videoElement} // Attach the ref to the video element
        className={`border-4 border-solid border-white max-w-[800px] h-auto w-[90%]`}
      ></video>
    </div>
  );
};

export default VideoPlayer;