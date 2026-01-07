"use client";

// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import Image from 'next/image';

import { useEffect, useRef } from "react";
import { useAudioPlayerStore } from "@/lib/stores/audio-player-store";
import { clsx } from 'clsx';

export default function AudioPlayerComponent() {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const currentTrack: AudioTrack | null = useAudioPlayerStore((state) => state.currentTrack);
  const isPlaying = useAudioPlayerStore((state) => state.isPlaying);
  const pause = useAudioPlayerStore((state) => state.pause);
  const play = useAudioPlayerStore((state) => state.play);
  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    // handle seeking logic here
  };
  const progressPercent = 67; // Placeholder for actual progress calculation

  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 w-full z-50",
        "bg-white shadow-lg",
        "transform transition-transform duration-300 ease-out",
        // isPlaying ? "translate-y-0" : "translate-y-full"
        "translate-y-0"
      )}>
      {/* <AudioPlayer
        onPlay={e => console.log("onPlay")}
        src={currentTrack ? currentTrack.url : undefined}
        autoPlayAfterSrcChange={true}
        // other props here
      /> */}
      <div className="border-t border-gray-300 shadow-[0px_0px_20px_10px_#fff]">
        <div className="flex items-center">
          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="shrink-0 inline-flex items-center justify-center p-3 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <span className="block h-4 w-4">
              {isPlaying ? (
                /* PAUSE SVG */
                <Image
                  src="/pause.svg"
                  alt="Pause Icon"
                  width={120}
                  height={40}
                  className="w-24 h-auto"
                />
              ) : (
                /* PLAY SVG */
                <Image
                  src="/play.svg"
                  alt="Play Icon"
                  width={120}
                  height={40}
                  className="w-24 h-auto"
                />
              )}
            </span>
          </button>

          {/* Progress bar */}
          <div
            ref={progressRef}
            onClick={handleSeek}
            className="relative flex-1 cursor-pointer"
          >
            {/* Floating labels */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between px-3">
              <span className="truncate text-sm sm:text-base font-medium text-neutral-900">
                My Title Here
              </span>
              <span className="ml-3 whitespace-nowrap text-sm sm:text-base text-neutral-700">
                {formatTime(78)}
              </span>
            </div>

            {/* Track */}
            <div className="h-10 overflow-hidden">
              {/* Fill */}
              <div
                className="h-full bg-neutral-100"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
