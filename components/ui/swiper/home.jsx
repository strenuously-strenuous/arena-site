'use client'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperHome() {
    return (
        <div className='rounded-sm container mx-auto overflow-hidden' id='swiper-home'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img className="w-full h-full" src="/images/Banner.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full" src="/images/arena-animation-banner.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};