import { create } from "zustand";

type PlayerState = {
  currentTrack: AudioTrack | null;
  queue: AudioTrack[];
  isPlaying: boolean;
  setTrack: (track: AudioTrack, queue?: AudioTrack[]) => void;
  playNext: () => void;
  clearTrack: () => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
};

export const useAudioPlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  queue: [],
  isPlaying: false,

  setTrack: (track, queue = []) => set({ currentTrack: track, queue, isPlaying: true }),

  playNext: () => {
    const { queue } = get();
    if (queue.length === 0) {
      set({ currentTrack: null, isPlaying: false });
    } else {
      const [next, ...rest] = queue;
      set({ currentTrack: next, queue: rest, isPlaying: true });
    }
  },

  clearTrack: () => set({ currentTrack: null, queue: [], isPlaying: false }),

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