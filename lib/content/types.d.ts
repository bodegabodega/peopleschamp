
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
    items: ContentBlock[]
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

type Slideshow = {
  __typename: "Slideshow"
  name: string
  imagesCollection: {
    items: Image[]
  }
}

type ImageWithMagnification = {
  __typename: "ImageWithMagnification"
  smallImageUrl: string
  largeImageUrl: string
}

type ContentBlock = AudioPlaylist | BodyText | Tracklist | Slideshow | ImageWithMagnification;

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
