import React, { useState, useEffect, useCallback } from 'react'

const TopNavHeaderScroll = () => {

      
  

    const [show, setShow] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position, 'srcoll')
        setScrollPosition(position);
    }

    const scrollBarHide = useCallback(() => {
        if( typeof window !== 'undefined' ) {
            
            const currentScroll = window.pageYOffset;
            
           
            if(currentScroll <= scrollPosition ) {
                setShow(true)
            } else {
                setShow(false)
            }
            setScrollPosition(window.scrollY)
        }
        
    }, [scrollPosition]) 

  

        useEffect(() => {
            if(typeof window !== 'undefined') {
                
                const position = window.pageYOffset;
                if(position == 0) {
                    setShow(true)
                }else{
                    setShow(false)
                }

                window.addEventListener('scroll', scrollBarHide, { passive: true})

                return () => {
                    window.removeEventListener('scroll', scrollBarHide)
                }
            }
        }, [scrollBarHide])
    

    return show
}

export default TopNavHeaderScroll