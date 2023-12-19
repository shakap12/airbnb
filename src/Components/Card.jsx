import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

function Card(props) {
    const navigate=useNavigate();
    const slides = props.slide;
    console.log(slides.images)
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
        <div className="w-full h-60 px-4 relative group shrink-0">
            <button onClick={()=>navigate("/room/"+slides.id)} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 flex items-end justify-center bg-center" style={{ backgroundImage: `url(${slides.images[currentIndex].url})`}}>
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
            {/* container holding second half of the card- content below image */}
            <div className="py-1 px-1 -space-y-0.5">
                <div className="flex flex-row justify-between">
                    <div className="font-semibold text-base">
                        {
                            <p>{slides.location},{slides.country}</p>
                        }
                    </div>
                    <div className="flex flex-row gap-1 ">
                        <FaStar className="mt-[7px] text-xs" />
                        {
                            slides.ratings
                        }
                    </div>
                </div>
                <div className="text-[15px] text-gray-500 ">
                    <p>
                        {
                            slides.distance
                        } kilometers away
                    </p>
                </div>
                <div className="text-[15px] text-gray-500">
                    <p>
                        {
                            slides.date
                        }
                    </p>
                </div>
            </div>
            <div className="mt-1 px-1">
                <span className="font-semibold">
                    {
                        slides.price
                    }
                </span>
                <span className="ml-1">night</span>
            </div>
        </div>
    )
}
export default Card;