import { gql } from "@apollo/client";
import { graphcmsClient } from "../lib/client";
import Layout from "../components/Layout";
import Block from "../components/block";

import { PAGE_QUERY } from "../lib/queries";

export default function Index({ page }) {
  return (
    <>
        <Block {...page} />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const client = graphcmsClient(preview)

  const { page } = await client.request(PAGE_QUERY, {
    slug: 'home'
  })

  return { 
    props: {
      page
    }
  }
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//     query MyQuery {
//       pages {
//         slug
//         title
//       }
//     }
    
//     `,
//   });

//   const { pages } = data;

//   return { 
//     props: {
//       pages
//     }
//   }
// }



