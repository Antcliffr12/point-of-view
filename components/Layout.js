import React from "react"
import Header from './Header';



function Layout({ children, props }) {
  return (
    <>
      <Header />
        <div className='pov-main__layout'>
            <main>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout