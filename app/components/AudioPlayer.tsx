"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    // Add event listeners
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    // Remove event listeners on cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const resetAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setCurrentTime(0);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleProgressChange = () => {
    const audio = audioRef.current;
    const progress = progressRef.current;
    if (!audio || !progress) return;

    audio.currentTime = parseFloat(progress.value);
    setCurrentTime(audio.currentTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="mx-auto max-w-md rounded-lg bg-gray-200 p-4 dark:bg-gray-800"
      onClick={(e) => e.stopPropagation()}
    >
      <h4 className="mb-2 text-lg font-semibold">{title}</h4>
      <audio ref={audioRef} src={audioSrc} />
      <div className="mb-2 flex items-center justify-between">
        <button
          onClick={togglePlayPause}
          className="rounded-full bg-purple-600 p-2 text-white hover:bg-purple-700 focus:outline-none"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={resetAudio}
          className="rounded-full bg-gray-400 p-2 text-white hover:bg-gray-500 focus:outline-none"
        >
          <RotateCcw size={24} />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm">{formatTime(currentTime)}</span>
        <input
          type="range"
          ref={progressRef}
          value={currentTime}
          min="0"
          max={duration}
          step="0.01"
          onChange={handleProgressChange}
          className="w-full"
        />
        <span className="text-sm">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
