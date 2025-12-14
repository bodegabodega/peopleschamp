"use client";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { useEffect, useRef } from "react";
import { useAudioPlayerStore } from "@/lib/stores/audio-player-store";

export default function AudioPlayerComponent() {
  const currentTrack: AudioTrack | null = useAudioPlayerStore((state) => state.currentTrack);
  const isPlaying = useAudioPlayerStore((state) => state.isPlaying);
  const pause = useAudioPlayerStore((state) => state.pause);
  return (
    <AudioPlayer
      onPlay={e => console.log("onPlay")}
      src={currentTrack ? currentTrack.url : undefined}
      autoPlayAfterSrcChange={true}
      // other props here
    />
  );
}
