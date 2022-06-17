import react from "react"
import image from 'next/image'
import { Autoplay, Pagination } from 'swiper';
import {  Swiper, SwiperSlide, SwiperSlider } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Logo({ ...page }) {
    

  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="clients-title">
          {
            page.clientTitle ? 
            <h2>{page.clientTitle}</h2>
            :
            null
          }
 
        </div>
        <Swiper
            pagination={{
              clickable: true
            }}
            speed={400}
            modules={[Autoplay, Pagination]}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 60
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 80
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 120
              }
            }}
           
            className="clients-slider"
        >
          <div className="swiper-wrapper align-items-center">
            {page.company.map(client => 
                <SwiperSlide key={client.name} className="swiper-slide">
                    <img src={client.logo.url} className="img-fluid" alt={client.company} />
                </SwiperSlide>
            )}
           </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Logo