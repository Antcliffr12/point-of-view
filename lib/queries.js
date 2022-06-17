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
                    button{
                        label
                        slug
                    }
                }

                ... on CtaBox {
                    id
                    iconBoxes {
                      id
                      icon
                      title
                      slug
                      description
                    }
                  }

                ... on Logo {
                    id
                    clientTitle
                    company {
                      name
                      logo {
                        url
                      }
                    }
                }
                ... on TextBlock {
                  id
                  textTitle
                  text {
                    html
                  }
                }

                ... on ServiceArea {
                  id
                  services {
                    serviceTitle
                    image {
                      url
                    }
                    description
                  }
                }
                
            }
        }
    }
`;


export { PAGE_QUERY }

