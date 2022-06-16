import { gql } from 'graphql-request'
import { graphcmsClient } from '../lib/client'
import { PAGE_QUERY } from '../lib/queries'
import Block from '../components/block'

function Page({ page }) {
    
  return (
    <Block {...page} />
  )
}

export default Page

export async function getStaticPaths() {
    const client = graphcmsClient()

    const { pages } = await client.request(gql`
    {
      pages(where: { slug_not_in: ["home"] }) {
        slug
      }
    }
  `)

  const paths = pages.map( page => ({
      params: { slug: page.slug }
  }))

  return {
      paths,
      fallback: false
  }
}

export async function getStaticProps({ params, preview = false }) {

    const client = graphcmsClient( preview )

    const { page } = await client.request(PAGE_QUERY, {
        slug: params.slug
    })

    if (!page) {
        return {
          notFound: true
        }
    }

    return {
        props: {
            page
        }
    }
    // console.log(paths);

    // const slug = params.slug[0];
    // const { data } = await client.query({
    //   query: gql`
    //   query MyQuery($slug: String!) {
    //     page(where: { slug: $slug }){
    //         slug
    //         hero{
    //             id
    //             title
    //             headline
    //             slug
    //             media{
    //                 url
    //                 mimeType
    //             }
    //         }
    //     }
    //   }
    //   `,
    //   variables: {slug}
    // });
    
    // console.log(data )
    // const { pages } = data;
   
    // console.log( pages );

    // return {
    //     props: {
    //         pages 
    //     }
    // }

    // const { page } = await client.request(pageQuery, {
    //     slug: params.slug
    // })

  }