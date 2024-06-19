import React, { useState } from 'react';
import VideoInput from './components/VideoInput';
import CaptionInput from './components/CaptionInput';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  return (
    <div>
      <div className="app-panel">
        <h1>Video Captioner</h1>
        <VideoInput setVideoUrl={setVideoUrl} />
        <CaptionInput setCaptions={setCaptions} />
        {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
      </div>
    </div>
  );
}

export default App;
