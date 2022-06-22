import { gql } from 'graphql-request'

const PAGE_QUERY = gql`
    query MyQuery($slug: String!){
        page(where: { slug: $slug }) {
            blocks{ 
                __typename
             
                ... on Hero {
                  
                    id
                    title
                    headline
                    media{
                        url
                        mimeType
                    }
                    
                }
            }
        }
    }
`;


export { PAGE_QUERY }

