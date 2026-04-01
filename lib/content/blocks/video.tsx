import { JSX } from "react";

type VideoBlockProps = {
  block: Video;
};

export default function VideoBlock({ block }: VideoBlockProps): JSX.Element {
  return (
    <video
      src={block.media.url}
      controls
      className="mb-4"
      poster={block.poster.url}
    />
  );
}
