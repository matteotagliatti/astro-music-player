import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import type { Track } from "../../types";
import { currentTrack, isPlaying } from "./state";

type Props = {
  tracks: Track[];
  id: string;
  artist: string;
  image_url: string;
};

const playIcon = (
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
);

const pauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 mr-2 -ml-1 text-pink-600"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"
      clipRule="evenodd"
    />
  </svg>
);

export default function TrackList({ tracks, id, artist, image_url }: Props) {
  return (
    <ul className="text-xl">
      {tracks.map((track) => {
        const $currentTrack = useStore(currentTrack);
        const $isPlaying = useStore(isPlaying);
        const isCurrentTrack = $currentTrack?.id === track.id;
        const [icon, setIcon] = useState<JSX.Element | number>(track.position);

        useEffect(() => {
          if (isCurrentTrack && $isPlaying) {
            setIcon(pauseIcon);
          } else if (isCurrentTrack && !$isPlaying) {
            setIcon(playIcon);
          } else {
            setIcon(track.position);
          }
        }, [isCurrentTrack, $isPlaying]);

        return (
          <li
            key={track.id}
            className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex items-center border-b first:border-t"
            onClick={() => {
              currentTrack.set({
                ...track,
                album_id: id,
                artist: artist,
                image_url: image_url,
              });

              if (isCurrentTrack) isPlaying.set(!$isPlaying);
              else if (!isCurrentTrack) isPlaying.set(true);
            }}
          >
            <div className="text-gray-500 w-8 mr-2">{icon}</div>
            <span className="font-medium">{track.name}</span>
            <span className="text-gray-500 ml-auto">{track.length}</span>
          </li>
        );
      })}
    </ul>
  );
}
