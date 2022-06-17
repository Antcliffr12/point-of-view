import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
import { useRouter } from "next/router";
import { Link } from 'react-scroll'

import { FaBars } from 'react-icons/fa'

function Navigation({ toggleNav }) {


    const router = useRouter();


  return (
    <>
        <nav className='pov-navbar'>
            <div className='container pov-navbar-container'>
                <h1 className='pov-navbar-container__logo'>
                    <Link href="/">Point of View</Link>
                </h1>
                <div className='pov-navbar-container__mobileIcon' onClick={toggleNav}>
                    <FaBars />
                </div>
                <ul className='pov-navbar__menu'>
                    <li className="pov-navbar__menu-item">
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
                    <li className="pov-navbar__menu-item">
                    <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            offset={-80}
                            
                        >
                            Services
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navigation