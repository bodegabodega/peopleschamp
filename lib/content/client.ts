import assert from 'node:assert/strict'
import { GraphQLClient } from 'graphql-request'

const initializeContentfulClient = () => {
  assert.ok(process.env.CONTENTFUL_SPACE_ID, 'CONTENTFUL_SPACE_ID is not defined')
  assert.ok(process.env.CONTENTFUL_ACCESS_TOKEN, 'CONTENTFUL_ACCESS_TOKEN is not defined')

  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  })

  return graphQLClient
}

export default initializeContentfulClient()