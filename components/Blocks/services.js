import React from 'react'

function Services( {...page} ) {
  console.log(page)
  return (
    <section id="services" className='services'>
      <div className='container' data-aos="fade-up">
        <div className='services-title'>
          <h2>Title</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className='row'>
          {page.services.map( ( service, i) => 
            <div className='col-md-6 d-flex align-items-stretch' key={service.serviceTitle} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className='services-box'>
                <i className={service.serviceIcon}></i>
                <h4> {service.serviceTitle}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services