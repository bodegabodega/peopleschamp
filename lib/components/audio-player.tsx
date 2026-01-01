"use client";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { useEffect, useRef } from "react";
import { useAudioPlayerStore } from "@/lib/stores/audio-player-store";
import { clsx } from 'clsx';

export default function AudioPlayerComponent() {
  const currentTrack: AudioTrack | null = useAudioPlayerStore((state) => state.currentTrack);
  const isPlaying = useAudioPlayerStore((state) => state.isPlaying);
  const pause = useAudioPlayerStore((state) => state.pause);
  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 w-full z-50",
        "bg-white shadow-lg",
        "transform transition-transform duration-300 ease-out",
        isPlaying ? "translate-y-0" : "translate-y-full"
      )}>
      <AudioPlayer
        onPlay={e => console.log("onPlay")}
        src={currentTrack ? currentTrack.url : undefined}
        autoPlayAfterSrcChange={true}
        // other props here
      />
    </footer>
  );
}
