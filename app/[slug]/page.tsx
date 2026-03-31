import { notFound } from "next/navigation"
import { pageBySlug } from "@/lib/content/fetch"
import font from "next/font/local"
import clsx from "clsx"
import { Switch, Case } from "@/lib/operators/switch"
import StackComponent from "@/lib/content/blocks/stack"
import { timeAgo } from "@/lib/utils/time"

enum LayoutType {
  OneColumn,
  ThreeColumn
}

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

  const blocks = page.contentBlocksCollection.items;
  const playlistBlocks = blocks.filter(b => b.__typename === 'AudioPlaylist');
  const bodyBlocks = blocks.filter(b => b.__typename !== 'AudioPlaylist');
  const layoutType: LayoutType = playlistBlocks.length > 0 ? LayoutType.ThreeColumn : LayoutType.OneColumn;
  console.log(page.date)

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-10">
      <Switch<LayoutType> test={layoutType}>

        <Case<LayoutType> value={LayoutType.OneColumn}>
          <h1 className={clsx("text-6xl mb-2 text-shadow-gold", calSans.className)} style={{ color: "#800000" }}>
            {page.title}
          </h1>
          {page.date && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{timeAgo(page.date)}</p>
          )}
          <StackComponent blocks={bodyBlocks} />
        </Case>

        <Case<LayoutType> value={LayoutType.ThreeColumn}>
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_320px] gap-6">

            {/* Title row: empty | title + date | empty */}
            <div className="hidden md:block" />
            <div>
              <h1 className={clsx("text-6xl mb-2 text-shadow-gold", calSans.className)} style={{ color: "#800000" }}>
                {page.title}
              </h1>
              {page.date && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{timeAgo(page.date)}</p>
              )}
            </div>
            <div className="hidden md:block" />

            {/* Content row */}
            {/* Col 1: Hero — hidden on mobile */}
            <div className="hidden md:block">
              {page.heroImage && (
                <img src={page.heroImage.url} alt={page.title} className="w-full rounded" />
              )}
            </div>

            {/* Col 2: Body content */}
            <main className="order-3 md:order-none">
              <StackComponent blocks={bodyBlocks} />
            </main>

            {/* Col 3: Playlist — above body on mobile */}
            <aside className="order-2 md:order-none">
              <StackComponent blocks={playlistBlocks} />
            </aside>

          </div>
        </Case>

      </Switch>
    </div>
  )
}
