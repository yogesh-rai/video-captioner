import React, { useState } from 'react';

function VideoInput({ setVideoUrl }) {
  const [url, setUrl] = useState('');

  const handleVideoLoad = () => {
    setVideoUrl(url);
  };

  return (
    <div className="container">
        <div className="form-group">
            <input 
                type="text" 
                placeholder="Enter video URL" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
            />
        </div>
        <button onClick={handleVideoLoad}>Load Video</button>
    </div>
  );
}

export default VideoInput;
