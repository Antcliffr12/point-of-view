import React, { useState } from 'react'
import TopBar from './TopBar'
import Navigation from './Navigation'

import TopNavHeaderScroll from '../lib/hooks'
import MobileMenu from './MobileMenu'


function Header() {

    const headerToTopScroll = TopNavHeaderScroll()
     
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
      setIsOpen(!isOpen)
  }

  return (
      <>
         <TopBar />
        <header id="pov-header" className={`fixed-top d-flex align-items-center ${headerToTopScroll ? '' : 'header-scroll'}`}>
            <Navigation toggleNav={toggleNav} />
            <MobileMenu isOpen={isOpen} toggleNav={toggleNav} />
        </header>
      </>
  )
}

export default Header