import type { Track } from "../../types";

type Props = {
  tracks: Track[];
};

export default function TrackList({ tracks }: Props) {
  return (
    <ul className="text-xl">
      {tracks.map((track) => {
        return (
          <li
            key={track.id}
            className="hover:bg-gray-50 cursor-pointer px-6 py-4 flex items-center border-b first:border-t"
            onClick={() => {
              console.log("clicked");
            }}
          >
            <span className="text-gray-500 w-8 mr-2">{track.position}</span>
            <span className="font-medium">{track.name}</span>
            <span className="text-gray-500 ml-auto">{track.length}</span>
          </li>
        );
      })}
    </ul>
  );
}
