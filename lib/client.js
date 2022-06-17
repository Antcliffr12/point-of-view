import { GraphQLClient } from 'graphql-request'

const graphcmsClient = (preview = false) =>
  new GraphQLClient(`https://api-us-east-1.graphcms.com/v2/${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}/master`, {
    headers: {
      ...(process.env.GRAPHCMS_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? process.env.GRAPHCMS_PREVIEW_TOKEN
            : process.env.GRAPHCMS_TOKEN
        }`
      })
    }
  })

export { graphcmsClient }
