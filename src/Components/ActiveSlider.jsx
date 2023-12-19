import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from "../Constants/Index";
function ActiveSlider() {
    return (
        <div className="flex flex-row items-center justify-center h-48 bg-[#6c34af]">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[30%] lg:max-w-[50%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        {/* <div className="flex flex-col gap-6 relative shadow-lg text-white rounded-xl px-6 py-8 h-[125px] w-[100px] lg:h-[200px] lg:w-[150px]">
                            <div className="absolute insert-0 bg-cover bg-center" style={{backgroundImage: `url(${item.backgroundImage})`}}>asd</div>
                            <div className="absolute insert-0 bg-black opacity-10 group-hover:opacity-50"></div> */}
                        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.backgroundImage})` }}
                            />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ActiveSlider;