import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
function RoomInfoReview(props) {
    const reviews = props.review
    const slides = props.slide

    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex flex-row overflow-y-scroll gap-x-3 gap-y-5 ">
                {
                    reviews.map((item) => (
                        <div className="flex flex-col gap-3 w-3/4 border rounded-md w-80 shrink-0 p-4">

                            <div className="flex flex-row">
                                <div className="flex flex-row justify-center items-center">
                                    {
                                        Array.from({ length: item.rating }, (e, i) =>
                                            <span><FaStar size={10} /></span>
                                        )
                                    }
                                    {
                                        Array.from({ length: 5 - item.rating }, (e, i) =>
                                            <span><FaRegStar size={10} /></span>
                                        )
                                    }
                                </div>
                                <div className="flex flex-row items-center justify-center"><LuDot size={10} /><span className="text-sm font-semibold">{item.date}</span></div>
                                <div className="flex flex-row items-center justify-center"><LuDot size={10} className="text-gray-500" /><span className="text-sm font-[300] text-gray-700">{item.tripType} trip</span></div>
                            </div>
                            <div className="w-full h-3/4">
                                {item.review}
                            </div>
                            <div className="flex flex-row gap-x-3 mt-8">
                                <div className="w-14 h-14 rounded-full border" style={{ backgroundImage: `url(${item.profile})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}></div>
                                <div className="flex flex-col">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-400 font-[300]">{item.country}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="border border-slate-900 rounded-md w-full h-12 font-semibold">Show all {slides.reviews.length} reviews</button>
        </div>
    )
}
export default RoomInfoReview;