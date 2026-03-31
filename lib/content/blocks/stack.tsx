import { JSX } from "react";
import AudioPlaylistComponent from "./audio-playlist";
import SlideshowComponent from "./slideshow";
import BodyText from "./body-text";
import TracklistComponent from "./tracklist";
import ImageWithMagnificationComponent from "./image-with-magnification";

type StackProps = {
  blocks: ContentBlock[]
}

export default function StackComponent(props: StackProps): JSX.Element {
  return (
    <>
      {
        props.blocks.map((block, index) => {
          switch (block.__typename) {
            case "BodyText":
            return <BodyText key={index} block={block} />
          case "AudioPlaylist":
            return <AudioPlaylistComponent key={index} block={block} />
          case "Tracklist":
            return <TracklistComponent key={index}  block={block} />
          case "Slideshow":
            return <SlideshowComponent key={index} block={block} />
          case "ImageWithMagnification":
            return <ImageWithMagnificationComponent key={index} block={block} />
          default:
            console.warn(`Unknown block: ${JSON.stringify(block, null, 2)}`);
            return null;
          }
        })
      }
    </>
  )
}