import type { Track } from "../../types";
import { currentTrack, isPlaying } from "./state";

type Props = {
  tracks: Track[];
  id: string;
  artist: string;
  image_url: string;
};

export default function PlayButton({ tracks, id, artist, image_url }: Props) {
  return (
    <button
      type="button"
      className="text-pink-600 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-none font-medium rounded-lg text-lg px-10 py-3 text-center inline-flex items-center"
      onClick={() => {
        currentTrack.set({
          ...tracks[0],
          album_id: id,
          artist: artist,
          image_url: image_url,
        });

        isPlaying.set(true);
      }}
    >
      <svg
        aria-hidden="true"
        className="w-6 h-6 mr-2 -ml-1 text-pink-600"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        ></path>
      </svg>
      Play
    </button>
  );
}
