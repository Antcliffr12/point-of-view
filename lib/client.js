import { GraphQLClient } from 'graphql-request'

const graphcmsClient = (preview = false) =>
  new GraphQLClient('https://api-us-east-1.graphcms.com/v2/cl3mjmn6w299m01z6a1t5gjqx/master', {
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
