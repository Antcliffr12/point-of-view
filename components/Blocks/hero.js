import react from "react";

function Hero( { ...page } ) {
  return (
    <section className='hero d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${page.media.url})`}}>
      <div className="container">
        <div className="hero-content">
          <h2 className="animate__animated animate__fadeInDown">{page.title}</h2>
          <p className="animate__animated animate__fadeInUp">{page.headline}</p>
          {
            page.button ?
            <a className="btn-cta-outline animate__animated animate__fadeInUp" href={page.button.slug}>{page.button.label}</a>
            :
            null
          }
        </div>
      </div>
    </section>
  )
}
export default Hero