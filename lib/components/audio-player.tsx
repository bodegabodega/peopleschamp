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
  return (
    <footer
      className={clsx(
        "fixed bottom-0 left-0 w-full z-50",
        "bg-white shadow-lg",
        "transform transition-transform duration-300 ease-out",
        // isPlaying ? "translate-y-0" : "translate-y-full"
        true ? "translate-y-0" : "translate-y-full"
      )}>
      <AudioPlayer
        onPlay={e => console.log("onPlay")}
        src={currentTrack ? currentTrack.url : undefined}
        autoPlayAfterSrcChange={true}
        layout='horizontal-reverse'
        showJumpControls={false}
        showSkipControls={false}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.ADDITIONAL_CONTROLS]}
        // customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        customAdditionalControls={[
          <Marquee>{currentTrack?.name}</Marquee>
        ]}
        customProgressBarSection={[RHAP_UI.CURRENT_TIME, RHAP_UI.PROGRESS_BAR, RHAP_UI.DURATION]}
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
