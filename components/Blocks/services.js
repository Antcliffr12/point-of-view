import React from 'react'

function Services( {...page} ) {
  console.log(page)
  return (
    <section id="services" className='services' name="services">
      <div className='container-fluid p-0' data-aos="fade-up">
        <div className='row'>
          {page.services.map( ( service, i) => 
            <div className='col-md-4 col-sm-12' key={service.serviceTitle} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className='image'>
                <div className='image-wrapper'>
                <div style={{ backgroundImage: `url("${service.image.url}")` }}></div>
                </div>
              </div>
              <h1> {service.serviceTitle}</h1>
               <p>{service.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services