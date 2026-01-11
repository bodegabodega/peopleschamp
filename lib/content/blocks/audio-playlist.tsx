"use client";

import Image from 'next/image';
import { useAudioPlayerStore } from '@/lib/stores/audio-player-store';
import { JSX } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

type AudioPlaylistProps = {
  block: AudioPlaylist;
}

export default function AudioPlaylistComponent({ block }: AudioPlaylistProps): JSX.Element {
  const { load } = useAudioPlayer()
  
  const playTrack = (track: AudioTrack) => {
    // useAudioPlayerStore.getState().setTrack(track);
    load(track.url, {
      autoplay: true
    })
  }

  const tracks = block.itemsCollection.items;
  return (
    <ol className="border border-gray-300 rounded-md divide-y divide-gray-200 overflow-hidden">
      {tracks.map((track, i) => {
        const isSelected = useAudioPlayerStore((state) => state.currentTrack?.url === track.url);

        return (
          <li key={i}>
            <button
              onClick={() => playTrack(track)}
              className={`
                w-full flex items-center gap-3 text-left px-4 py-2
                transition-all duration-200 ease-out
                ${
                  isSelected
                    ? "bg-blue-50 border-l-4 border-blue-500 font-medium scale-[1.01] shadow-sm"
                    : "hover:bg-gray-50"
                }
              `}
            >
              {/* Play icon */}
              <Image
                src="/play.svg"
                alt="Play Icon"
                width={20}
                height={20}
                className={`
                  w-3 h-3 transition-colors duration-200
                  ${isSelected ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}
                `}
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`
                  w-5 h-5 transition-colors duration-200
                  ${isSelected ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}
                `}
              >
                <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
              </svg> */}

              {/* Track name */}
              {track.name}
            </button>
          </li>
        );
      })}
    </ol>
  )
};



