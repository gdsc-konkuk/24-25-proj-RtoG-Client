import { create } from "zustand";

type Live = {
  id: string;
  name: string;
  address: string;
  status?: "hazardous" | "normal" | "danger";
};

type LiveStore = {
  lives: Live[];
  setLives: (lives: Live[]) => void;
  updateLive: (id: string, updater: (live: Live) => Live) => void;
  getLive: (id: string) => Live | undefined;
};

const useLiveStore = create<LiveStore>((set, get) => ({
  lives: [],
  setLives: (lives: Live[]) => set({ lives }),
  updateLive: (id: string, updater: (live: Live) => Live) =>
    set((state) => ({
      lives: state.lives.map((live) => (live.id === id ? updater(live) : live)),
    })),
  getLive: (id: string) => get().lives.find((live) => live.id === id),
}));

export default useLiveStore;
