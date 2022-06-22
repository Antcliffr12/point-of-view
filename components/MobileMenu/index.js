import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'


function MobileMenu({ isOpen, toggleNav }) {
  return (
    <aside className={`pov-mobileMenu ${isOpen ? 'open' : ''} `} onClick={toggleNav}>
     <div className='pov-mobileMenu__icon' onClick={toggleNav}>
        <FaTimes />
        </div>
        <div className='pov-mobileMenu__wrapper'>
            <ul className='pov-mobileMenu__menu'>
                    <li className='pov-mobileMenu__menu-item'>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            offset={-80}
                            isDynamic={true}
               
                        >
                        About
                        </Link>  
                    </li>
                    <li className='pov-mobileMenu__menu-item'>
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            offset={-80}
                            
                        >
                            Services
                        </Link>
                    </li>
                    <li className='pov-mobileMenu__menu-item'>
                        <Link
                            activeClass="active"
                            to="team"
                            spy={true}
                            offset={-80}
                        >
                            Team
                        </Link>
                    </li>
            </ul>
        </div>
    </aside>    
  )
}

export default MobileMenu