import React from 'react'
import * as Blocks from './Blocks';

function Block({blocks, ...page}) {
  return (
    <>
        {blocks.map((block) => {
                    
          const Component = Blocks[block.__typename]

          if( ! Component ) return null 
          
          return <Component key={block.id} page={page} {...block} />
          
        })}
    </>
  )
}

export default Block