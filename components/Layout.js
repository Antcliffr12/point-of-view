import Head from 'next/head'
import Header from './Header';



function Layout({ children, props }) {
  return (
    
    <>
    <Head>
      <title>Point Of View LLC</title>
    </Head>
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