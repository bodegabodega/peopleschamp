
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
    items: (AudioPlaylist | BodyText | Tracklist)[]
  }
}

type AudioTrack = {
  name: string
  url: string
}

type AudioPlaylist = {
  __typename: "AudioPlaylist"
  name: string
  itemsCollection: {
    items: AudioTrack[]
  }
}

type BodyText = {
  __typename: "BodyText"
  content: {
    json: any
  }
}

type Tracklist = {
  __typename: "Tracklist"
  tracks: string[]
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
