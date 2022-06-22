import react from "react";

function Hero( { ...page } ) {
  return (
    <section className='hero d-flex align-items-center' style={{ backgroundImage: `url(${page.media.url})`}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 col-md-8">
            <div className="hero-content">
              <h1 className="animate__animated animate__fadeInLeft">{page.title}</h1>
              <p className="animate__animated animate__fadeInLeft">{page.headline}</p>
              <div className="hero-content__btn animate__animated animate__fadeInLeft">
                  <a href="#" className="hero-btn">
                      Let's Get to Work
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </section>
  )
}
export default Hero