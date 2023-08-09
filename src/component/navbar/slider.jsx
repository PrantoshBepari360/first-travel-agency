import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slids from '../../slide.json'
import 'swiper/css';
import 'swiper/css/effect-cube';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}

            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            effect={'cube'}
            // grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
        >
            {slids.map((slide) => (

                <SwiperSlide key={slide.image}>

                    <img className=''src='9.jpg' />
                    <p className=''>{slide.title}</p>

                </SwiperSlide>
            ))}
            {/* <SwiperSlide><img src='2.jpg' /></SwiperSlide>
            <SwiperSlide><img src='2.jpg' /></SwiperSlide>
            <SwiperSlide><img src='2.jpg' /> </SwiperSlide> */}
            ...
        </Swiper>
    )
}

export default Slider