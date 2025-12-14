import { gql } from 'graphql-request'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { parse } from 'graphql'


/**
 * GraphQL query to fetch page summaries
 */
export const allPages: TypedDocumentNode = parse(gql`
  {
    pageCollection {
      items {
        title
        slug
        heroImage {
          url
        }
      }
    }
  }
`)

export const pageBySlug: TypedDocumentNode = parse(gql`
  query PageBySlug($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title,
        slug,
        date,
        heroImage {
          url
        },
        contentBlocksCollection {
          items {
            __typename,
            ... on AudioPlaylist {
              name,
              itemsCollection {
                items {
                  name,
                  url
                }
              }
            }
            ... on BodyText {
              content {
                json
              }
            }
          }
        }
      }
    }
  }
`)