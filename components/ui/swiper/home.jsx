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
        <div className='rounded-[24px] w-[95vw] mx-auto overflow-hidden' id='swiper-home'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img className="w-full h-full" src="https://aptech-studentconnect.com/arena/images/main-banner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full" src="https://arenauttarpara.com/images/banner8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full" src="https://images.jdmagicbox.com/v2/comp/delhi/a2/011pxx11.xx11.171117145745.f4a2/catalogue/arena-animation-gtb-nagar-delhi-graphic-training-institutes-i5oiybl6ip.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};