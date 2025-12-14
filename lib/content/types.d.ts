
type Image = {
  url: string
}

type PageSummary = {
  title: string
  slug: string
  heroImage: Image
}

type Page = PageSummary & {
  date: string
  contentBlocksCollection: {
    items: (AudioPlaylist | BodyText)[]
  }
}

type AudioPlaylist = {
  __typename: "AudioPlaylist"
  name: string
  itemsCollection: {
    items: {
      name: string
      url: string
    }[]
  }
}

type BodyText = {
  __typename: "BodyText"
  content: {
    json: any
  }
}

type AllPagesResponse = {
  pageCollection: {
    items: PageSummary[]
  }
}

type PageBySlugResponse = {
  pageCollection: {
    items: Page[]
  }
}
