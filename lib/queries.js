import { gql } from 'graphql-request'

const PAGE_QUERY = gql`
    query MyQuery($slug: String!){
        page(where: { slug: $slug }) {
            blocks{ 
                __typename
                ... on ServiceCta{
                    id
                    slides{
                        icon{
                            url
                        }
                        title
                        excerpt
                    }
                }
                
                ... on Hero {
                    id
                    title
                    headline
                    media{
                        url
                        mimeType
                    }
                }

                ... on Logo {
                    id
                    title
                    company {
                      name
                      logo {
                        url
                      }
                    }
                  }
            }
        }
    }
`;


export { PAGE_QUERY }

