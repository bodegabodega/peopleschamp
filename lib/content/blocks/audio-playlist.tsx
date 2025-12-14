"use client";

import { useAudioPlayerStore } from '@/lib/stores/audio-player-store';
import { JSX } from 'react';

type AudioPlaylistProps = {
  playlist: AudioPlaylist;
}

export default function AudioPlaylistComponent({ playlist }: AudioPlaylistProps): JSX.Element {
  const playTrack = (track: AudioTrack) => {
    useAudioPlayerStore.getState().setTrack(track);
  }

  const tracks = playlist.itemsCollection.items;
  return (
    <ol className="border border-gray-300 rounded-md divide-y divide-gray-200 overflow-hidden mb-5">
      {tracks.map((track, trackIndex) => {
        const isSelected = useAudioPlayerStore((state) => state.currentTrack?.url === track.url);

        return (
          <li key={trackIndex}>
            <button
              onClick={() => playTrack(track)}
              className={`
                w-full text-left px-4 py-2 transition-all duration-200
                ${isSelected
                  ? "bg-blue-50 border-l-4 border-blue-500 font-medium"
                  : "hover:bg-gray-50"
                }
              `}
            >
              {track.name}
            </button>
          </li>
        );
      })}
    </ol>
  )
};