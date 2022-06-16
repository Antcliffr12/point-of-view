import react from "react";

function Hero( { ...page } ) {
  return (
    <section className='hero d-flex justify-cntent-center align-items-center' style={{ backgroundImage: `url(${page.media.url})`}}>
      <div className="container">
        <div className="hero-content">
          <h2 className="animate__animated animate__fadeInDown">{page.title}</h2>
          <p className="animate__animated animate__fadeInUp">{page.headline}</p>
        </div>
      </div>
    </section>
    // <div className='hero'>
      
    //     <div className='container'>
    //         <div className='hero-bg'>
    //         {
    //             page.media.mimeType === 'video/mp4' ? 
    //                 <video src={page.media.url} type='video/mp4' autoPlay loop muted className='hero-bg__video' />
    //                 :
    //                 <img src={page.media.url} className='hero-bg__image' alt={page.title} />
    //         }
    //         </div>
    //         <div className='hero-content'>
    //             <h1>{page.title}</h1>
    //             <p>{page.headline}</p>
    //         </div>
    //     </div>
    // </div>
  )
}
export default Hero