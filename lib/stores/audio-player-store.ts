import { create } from "zustand";
import { useAudioPlayer } from "react-use-audio-player";

type PlayerState = {
  currentTrack: AudioTrack | null;
  isPlaying: boolean;
  setTrack: (track: AudioTrack) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
};

const { load } = useAudioPlayer()

export const useAudioPlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,

  setTrack: (track) => set({ currentTrack: track, isPlaying: true }),

  play: () => {
    if (get().currentTrack) {
      set({ isPlaying: true });
    }
  },

  pause: () => set({ isPlaying: false }),

  togglePlay: () => {
    const { isPlaying, currentTrack } = get();
    if (!currentTrack) return;
    set({ isPlaying: !isPlaying });
  },
}));