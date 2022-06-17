import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


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
                    <li className={router.asPath == "#services" ? "pov-navbar__menu-item active" : "pov-navbar__menu-item"}>
                        <Link
                            href='#about'
                        >
                        About
                        </Link>        
                    </li>
                    <li className={router.asPath == "#services" ? "pov-navbar__menu-item active" : "pov-navbar__menu-item"}>
                        <Link 
                            href='#services'
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