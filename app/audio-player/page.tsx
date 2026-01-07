"use client"

import { useAudioPlayerStore } from '@/lib/stores/audio-player-store';


export default function AudioPlayerPage() {
  const playTrack = (track: AudioTrack) => {
      useAudioPlayerStore.getState().setTrack(track);
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ps-4 pe-4 pt-0">
      <button
        onClick={() => playTrack({
          name: "Something",
          url: ""
        })}
      >Click</button>
    </div>
  );
}
