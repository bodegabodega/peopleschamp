import { notFound } from "next/navigation"
import { pageBySlug } from "@/lib/content/fetch"
import blocks from "@/lib/content/blocks"

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
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
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
            return blocks(block.__typename, block, index)
          })
        }
      </div>
    </div>
  </div>
}