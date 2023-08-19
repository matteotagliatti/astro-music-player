import { atom } from "nanostores";
import type { PlayerTrack } from "../../types";

export const isPlaying = atom(false);
export const currentTrack = atom<PlayerTrack | null>(null);
