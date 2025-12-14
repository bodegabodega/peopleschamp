"use server"

import client from './client'
import * as queries from './queries'


export const allPages = async (): Promise<PageSummary[]> => {
  const data = await client.request({
    document: queries.allPages
  }) as AllPagesResponse;
  return data.pageCollection.items
}

export const pageBySlug = async (slug: string): Promise<Page | null> => {
  const data = await client.request({
    document: queries.pageBySlug,
    variables: { slug },
  }) as PageBySlugResponse;
  return data.pageCollection.items[0] || null
}