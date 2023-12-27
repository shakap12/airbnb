import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function RoomInfoCard(prop) {
    const navigate = useNavigate();
    const slides = prop.slide
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? slides.images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const lastSlide = currentIndex === slides.images.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="w-full h-60 relative group shrink-0">
            <button onClick={() => navigate("/room/" + slides.id)} className="w-full h-full lg:rounded-2xl bg-center bg-cover duration-500 flex items-end justify-center bg-center" style={{ backgroundImage: `url(${slides.images[currentIndex].url})` }}>
                <div className="flex justify-center py-2">
                    {
                        slides.images.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer" ><RxDotFilled style={{ color: "whitesmoke" }}></RxDotFilled></div>
                        ))
                    }
                </div>
            </button>
            {/* left arrow */}
            <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={25} onClick={() => nextSlide()}></BsChevronCompactLeft>
            </div>
            {/* right arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight size={25} onClick={() => prevSlide()}></BsChevronCompactRight>
            </div>
        </div>
    )
}
export default RoomInfoCard;