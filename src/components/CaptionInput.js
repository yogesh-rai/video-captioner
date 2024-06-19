import React, { useState } from 'react';

function CaptionInput({ setCaptions }) {
  const [text, setText] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [captionList, setCaptionList] = useState([]);

  const convertTimestampToSeconds = (timestamp) => {
    const parts = timestamp.split(':');
    if (parts.length !== 3) {
      alert("Timestamp must be in hh:mm:ss format");
      return NaN;
    }
    const [hours, minutes, seconds] = parts.map(Number);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      alert("Invalid timestamp format");
      return NaN;
    }
    return hours * 3600 + minutes * 60 + seconds;
  };

  const addCaption = () => {
    const timestampInSeconds = convertTimestampToSeconds(timestamp);
    if (isNaN(timestampInSeconds)) return;
    const newCaption = { text, timestamp: timestampInSeconds };
    const newCaptionList = [...captionList, newCaption];
    setCaptionList(newCaptionList);
    setCaptions(newCaptionList);
    setText('');
    setTimestamp('');
  };

  return (
    <div className='container'>
      <div className="form-group">
        <textarea 
            placeholder="Enter caption text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
        />
        <input 
            type="text" 
            placeholder="Enter timestamp (hh:mm:ss)" 
            value={timestamp} 
            onChange={(e) => setTimestamp(e.target.value)}
        />
      </div>
      <button onClick={addCaption}>Add Caption</button>
      <ul>
        {captionList.map((caption, index) => (
          <li key={index}>
            {new Date(caption.timestamp * 1000).toISOString().slice(11, 19)}: {caption.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CaptionInput;
