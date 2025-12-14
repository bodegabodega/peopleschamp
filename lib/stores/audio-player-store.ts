import { create } from "zustand";

type PlayerState = {
  currentTrack: AudioTrack | null;
  isPlaying: boolean;
  setTrack: (track: AudioTrack) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
};

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