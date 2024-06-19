import React, { useRef, useEffect, useState } from 'react';

function VideoPlayer({ videoUrl, captions }) {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');

  console.log(videoUrl);

  useEffect(() => {
    const video = videoRef.current;

    video.src = videoUrl;
    video.load();
    video.play();
    
    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const currentCaption = captions.find(
        (caption) => currentTime >= caption.timestamp && currentTime < caption.timestamp + 5
      );
      setCurrentCaption(currentCaption ? currentCaption.text : '');
    };
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };

  }, [videoUrl, captions]);

  return (
    <div className="video-container">
      <video ref={videoRef} controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {currentCaption && <div className="caption-overlay">{currentCaption}</div>}
    </div>
  );
}

export default VideoPlayer;
