import { notFound } from "next/navigation"
import { pageBySlug } from "@/lib/content/fetch"
import font from "next/font/local"
import clsx from "clsx"
import { Switch, Case } from "@/lib/operators/switch"
import StackComponent from "@/lib/content/blocks/stack"

enum LayoutType {
  OneColumn,
  TwoColumn
}

const calSans = font({
  src: "../../lib/fonts/CalSans-Regular.ttf"
});

const twoColumnLayoutTypes = ['AudioPlaylist'];

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
  const layoutType: LayoutType = twoColumnLayoutTypes.includes(page.contentBlocksCollection.items[0]?.__typename) ? LayoutType.TwoColumn : LayoutType.OneColumn;
  return <div>
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Headline */}
      <h1 className={clsx(
        "text-6xl mb-2 text-shadow-gold",
        calSans.className
      )}
        style={{ color: "#800000" }}
      >
        {page.title}
      </h1>

      {/* Detail line */}
      {page.date && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          12 Years Ago {/* Format date as "Month Day, Year" */}
        </p>
      )}

      {/* Body content */}
      <Switch<LayoutType> test={layoutType}>
        <Case<LayoutType> value={LayoutType.OneColumn}>
          <StackComponent blocks={page.contentBlocksCollection.items} />
        </Case>
        <Case<LayoutType> value={LayoutType.TwoColumn}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6">
            {/* Left / Main content */}
            <main className="order-2 md:order-1">
              <StackComponent blocks={page.contentBlocksCollection.items.slice(1)} />
            </main>

            {/* Right / Sidebar */}
            <aside className="order-1 md:order-2">
              <StackComponent blocks={page.contentBlocksCollection.items.slice(0, 1)} />
            </aside>
          </div>
          {/* <StackComponent blocks={page.contentBlocksCollection.items} /> */}
        </Case>
      </Switch>
    </div>
  </div>
}