"use client";

import Image from "next/image"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audio-player.css';

import playIcon from './../../public/play.svg'

import { useEffect, useRef } from "react";
import { useAudioPlayerStore } from "@/lib/stores/audio-player-store";
import { clsx } from 'clsx';
import Marquee from "react-fast-marquee";

export default function AudioPlayerComponent() {
  const currentTrack: AudioTrack | null = useAudioPlayerStore((state) => state.currentTrack);
  const isPlaying = useAudioPlayerStore((state) => state.isPlaying);
  const pause = useAudioPlayerStore((state) => state.pause);
  const clearTrack = useAudioPlayerStore((state) => state.clearTrack);
  const playNext = useAudioPlayerStore((state) => state.playNext);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (currentTrack) {
      playerRef.current?.audio?.current?.play();
    } else {
      playerRef.current?.audio?.current?.pause();
    }
  }, [currentTrack]);

  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 w-full z-50",
        "bg-white dark:bg-[#1a1a1a] shadow-lg",
        "transform transition-transform duration-300 ease-out",
        currentTrack ? "translate-y-0" : "translate-y-full"
      )}>
      <AudioPlayer
        ref={playerRef}
        onPlay={e => console.log("onPlay")}
        onEnded={playNext}
        src={currentTrack?.url}
        autoPlayAfterSrcChange={false}
        layout='horizontal-reverse'
        showJumpControls={false}
        showSkipControls={false}
        // customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.ADDITIONAL_CONTROLS]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        customAdditionalControls={[
          <Marquee>{currentTrack?.name}</Marquee>
        ]}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR, <div className="song-label">{currentTrack?.name}</div>, RHAP_UI.DURATION]}
        customIcons={{
          play: <Image
            src="/play.svg"
            alt="Play Icon"
            width={20}
            height={20}
          />,
          pause: <Image
            src="/pause.svg"
            alt="Pause Icon"
            width={20}
            height={20}
          />
        }}
        // other props here
      />
    </footer>
  );
}
