import { useStore } from "@nanostores/react";
import { currentTrack, isPlaying } from "./state";

export default function Album({
  id,
  name,
  image_url,
}: {
  id: string;
  name: string;
  image_url: string;
}) {
  /* const $isPlaying = useStore(isPlaying);
  const $currentTrack = useStore(currentTrack); */
  let className = "absolute top-0 opacity-0 vynil-image vynil-animation-in";

  /* if ($currentTrack && $isPlaying) {
    const isPlayingCurrentRecord = $isPlaying && $currentTrack.album_id === id;
    if (isPlayingCurrentRecord) className += "-spinning";
  } */

  return (
    <div className="relative shadow-xl mr-32 w-72 lg:w-auto">
      <img
        src={image_url}
        alt={name}
        width="400"
        height="400"
        className="relative rounded-md z-10 bg-white"
        style={{ viewTransitionName: `album-${id}` }}
      />
      <img
        src="/vynil.webp"
        width="400"
        height="400"
        className={className}
        style={{ viewTransitionName: `vinyl-${id}` }}
      />
    </div>
  );
}
