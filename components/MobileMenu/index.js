import React from 'react'
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link'


function MobileMenu({ isOpen, toggleNav }) {
  return (
    <aside className={`pov-mobileMenu ${isOpen ? 'open' : ''} `} onClick={toggleNav}>
     <div className='pov-mobileMenu__icon' onClick={toggleNav}>
        <FaTimes />
        </div>
        <div className='pov-mobileMenu__wrapper'>
            <ul className='pov-mobileMenu__menu'>
                    <li className='pov-mobileMenu__menu-item'>
                        <Link href="/about">About</Link>
                    </li>
                    <li className='pov-mobileMenu__menu-item'>
                        <Link href="/contact">Contact</Link>
                    </li>
            </ul>
        </div>
    </aside>    
  )
}

export default MobileMenu