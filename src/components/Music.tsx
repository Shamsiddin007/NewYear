"use client";
// pages/music.tsx
import React, { useState } from 'react';

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audioElement = document.getElementById('newyear-audio') as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <audio
        id="newyear-audio"
        src="/mp3/newyear.mp3"
        loop
        preload="auto"
      >
        Your browser does not support the audio element.
      </audio>
      {!isPlaying && (
        <button onClick={handlePlay} className='bg-blue-700 px-2 rounded-md'>Play Audio</button>
      )}
    </div>
  );
}
