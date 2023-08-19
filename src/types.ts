export type Album = {
  id: string;
  name: string;
  artist: string;
  url: string;
  image_url: string;
  year: string;
  tracks: Track[];
};

export type Track = {
  id: string;
  name: string;
  position: number;
  length: string;
};

export type PlayerTrack = Track & {
  artist: string;
  image_url: string;
};
