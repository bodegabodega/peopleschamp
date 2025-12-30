import { notFound } from "next/navigation"
import { pageBySlug } from "@/lib/content/fetch"
import BodyText from "@/lib/content/blocks/body-text"
import AudioPlaylistComponent from "@/lib/content/blocks/audio-playlist"
import TracklistComponent from "@/lib/content/blocks/tracklist"
import SlideshowComponent from "@/lib/content/blocks/slideshow"
import font from "next/font/local"
import clsx from "clsx"

const calSans = font({
  src: "../../lib/fonts/CalSans-Regular.ttf"
});

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await pageBySlug(slug)
  if (!page) {
    notFound()
  }
  return <div>
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Headline */}
      <h1 className={clsx(
        "text-6xl text-gray-900 mb-2 text-shadow-cyan",
        calSans.className
      )}>
        {page.title}
      </h1>

      {/* Detail line */}
      {page.date && (
        <p className="text-sm text-gray-500 mb-8">
          12 Years Ago {/* Format date as "Month Day, Year" */}
        </p>
      )}

      {/* Body content */}
      <div>
        {
          page.contentBlocksCollection.items.map((block, index) => {
            switch (block.__typename) {
              case "BodyText":
                return <BodyText key={index} block={block} />
              case "AudioPlaylist":
                return <AudioPlaylistComponent key={index} block={block} />
              case "Tracklist":
                return <TracklistComponent key={index}  block={block} />
              case "Slideshow":
                return <SlideshowComponent key={index} block={block} />
              default:
                console.warn(`Unknown block: ${JSON.stringify(block, null, 2)}`);
                return null;
            }
          })
        }
      </div>
    </div>
  </div>
}