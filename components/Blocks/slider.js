import react from "react";
import { Swiper, SwiperSlide, SwiperSlider } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";


function Slider( { slides } ) {

    const params = {
        slidesPerView: 1,
        initialSlide : 0,
    }

    return (
        <div className="services-slider">
            <div className="container">
            <Swiper { ...params }
                breakpoints={{
                    768: {
                        slidesPerView:3,
                        initialSlide:1,
                        centeredSlides:true,
                        watchSlidesProgress:true,
                        noSwiping:true,
                        noSwipingClass:'swiper-slide'
                    }
                }}
          >
            {slides.map(cta => 
                <SwiperSlide key={cta.title}>
                    <div className="card text-center">
                        <div className="card-body">
                            <span className="card-body-image mb-4">
                                <Image 
                                    src={cta.icon.url} 
                                    alt={cta.title} 
                                    layout="fill"
                                />
                            </span>
                            <h4 className="card-body-title">{cta.title}</h4>
                            <p className="card-text">{cta.excerpt}</p>
                        </div>
                    </div>
                </SwiperSlide>    
            )}
              </Swiper>

            </div>
        </div>
    )

}

export default Slider