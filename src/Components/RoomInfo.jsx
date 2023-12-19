import React from "react";
import Headers from './Headers';
import { FiShare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router";
import { PiDot } from "react-icons/pi";
import slides from "../Constants/imageIndex";
import { GoStarFill } from "react-icons/go";
import { CiParking1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { FaWifi } from "react-icons/fa6";
import { PiTelevision } from "react-icons/pi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { LuCigarette } from "react-icons/lu";
import { GiSmokeBomb } from "react-icons/gi";
import CalenderRoomInfo from "./CalenderRoomInfo";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { CiShoppingTag } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function RoomInfo() {
    const { id } = useParams();
    const [offer1, offer2, offer3, offer4, offer5, offer6, offer7, offer8, offer9, offer10] = slides[id].offers
    const reviews = slides[id].reviews.slice(0, 6);
    console.log(reviews)
    return (
        <div>
            <Headers></Headers>
            {/* container for all the content below header */}
            <div className="px-12">
                <div className="flex flex-row justify-between mt-5">
                    <p className="text-3xl font-semibold text-slate-900">Serenic Premium views in India</p>
                    <div className="flex flex-row mt-2">
                        <FiShare className="text-md mt-1" /><p className="text-md ml-2 underline font-semibold text-[14px]">Share</p>
                        <FaRegHeart className="text-md mt-1 ml-6" /><p className="ml-2 underline font-semibold text-[14px]">Save</p>
                    </div>
                </div>
                {/* image grid box */}
                <div className="grid grid-cols-2 h-80 mt-6 rounded-xl overflow-hidden gap-2">
                    <div className="w-full h-full" style={{ backgroundImage: `url(${slides[id].images[0].url})`, backgroundSize: '100% 100%', backgroundRepeat: "no-repeat" }}></div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="w-full h-full" style={{ backgroundImage: `url(${slides[id].images[1].url})`, backgroundSize: '100% 100%', backgroundRepeat: "no-repeat" }}></div>
                        <div className="w-full h-full" style={{ backgroundImage: `url(${slides[id].images[2].url})`, backgroundSize: '100% 100%', backgroundRepeat: "no-repeat" }}></div>
                        <div className="w-full h-full" style={{ backgroundImage: `url(${slides[id].images[3].url})`, backgroundSize: '100% 100%', backgroundRepeat: "no-repeat" }}></div>
                        <div className="w-full h-full" style={{ backgroundImage: `url(${slides[id].images[4].url})`, backgroundSize: '100% 100%', backgroundRepeat: "no-repeat" }}></div>
                    </div>
                </div>
                {/* container holding details of room below image carousel*/}
                <div>
                    {/* first container holding details of room & owner */}
                    <div className="mt-7 mb-7">
                        <div className="border-b border-gray-300 pb-8">
                            <div className="text-2xl font-semibold">Hotel in {slides[id].location},{slides[id].country}</div>
                            <div className="flex flex-row text-gray-900">
                                {slides[id].details.numguest} guests <PiDot className="mt-1 text-lg" />{slides[id].details.bedroom} bedroom <PiDot className="mt-1 text-lg" />{slides[id].details.bed} beds <PiDot className="mt-1 text-lg" />{slides[id].details.bathroom} bathroom </div>
                            <div className="flex flex-row mt-1"> <GoStarFill className="mt-1" /> <span className="ml-1 text-md">No reviews yet</span></div>
                        </div>
                        <div className="flex flex-row py-6 gap-5 border-b border-gray-300">
                            <div class="w-12 h-12 rounded-full border border-gray-500"></div>
                            <div>
                                <div className="font-semibold">Hosted by Shashwat Kapoor</div>
                                <div className="text-gray-400 text-sm">5 years hosting</div>
                            </div>
                        </div>
                        <div className="flex flex-col px-1 py-6 gap-4 border-b border-gray-300">
                            <div className="flex flex-row gap-6">
                                <CiParking1 className="text-4xl" />
                                <div>
                                    <p className="font-semibold text-md">Park for free</p>
                                    <p className="font-light text-gray-700 text-[15px]">This is one of the few places in the area with free parking.</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-7">
                                <CiStar className="text-3xl" />
                                <div>
                                    <p className="font-semibold text-md">Experienced host</p>
                                    <p className="font-light text-gray-700 text-[15px]">Shashwat has 23 reviews for this place</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b border-gray-300">
                            <p className="text-md">You could view sunset from the property. Backwater in front of our property makes you feel great and relaxed stay.  Explore the backwaters and experience tranquility and its scenic surroundings. Wake up to the greetings of the sun and indulge in the classic beauty of Kerala in all its glory. My place is good for couples, solo adventurers, business travelers, families (with kids), big groups.</p>
                            <a className="underline cursor-pointer">Show more</a><span> &#x276F;</span>
                        </div>
                        <div className="flex flex-col py-9 border-b border-gray-300 gap-4">
                            <p className="text-xl font-semibold">Where you'll sleep</p>
                            <div className="w-[350px] h-[200px] rounded-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D')", backgroundSize: '100% 100%', backgroundRepeat: "no-repeat" }}></div>
                            <div className="leading-7">
                                <p className="font-semibold">Bedroom</p>
                                <p className="text-sm text-gray-700">1 double bed</p>
                            </div>
                        </div>
                        <div className="py-10 border-b border-gray-300">
                            <p className="font-semibold text-2xl">What this place offers</p>
                            <div className="flex flex-row mt-4 text-md gap-28">
                                <div>
                                    <ul className="flex flex-col gap-y-3">
                                        <li className="flex flex-row gap-x-3"><LiaUmbrellaBeachSolid className="text-3xl" /><p>{offer1}</p></li>
                                        <li className="flex flex-row gap-x-3"><FaWifi className="text-3xl" /><p>{offer2}</p></li>
                                        <li className="flex flex-row gap-x-3"><PiTelevision className="text-3xl" /><p>{offer3}</p></li>
                                        <li className="flex flex-row gap-x-3"><MdOutlineFreeBreakfast className="text-3xl" /><p>{offer4}</p></li>
                                        <li className="flex flex-row gap-x-3"><GiSmokeBomb className="text-3xl" /><p className="line-through">{offer5}</p></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="flex flex-col gap-y-3">
                                        <li className="flex flex-row gap-x-3"><LiaUmbrellaBeachSolid className="text-3xl" /><p>{offer6}</p></li>
                                        <li className="flex flex-row gap-x-3"><FaCarAlt className="text-3xl" /><p>{offer7}</p></li>
                                        <li className="flex flex-row gap-x-3"><FaRegSnowflake className="text-3xl" /><p>{offer8}</p></li>
                                        <li className="flex flex-row gap-x-3"><LuCigarette className="text-3xl" /><p>{offer9}</p></li>
                                        <li className="flex flex-row gap-x-3"><GiSmokeBomb className="text-3xl" /><p className="line-through">{offer10}</p></li>
                                    </ul>
                                </div>
                            </div>
                            <button className="border border-slate-900 rounded-md w-48 h-12 mt-8 font-semibold">Show all {slides[id].offers.length + 8} amenities</button>
                        </div>
                        <CalenderRoomInfo></CalenderRoomInfo>
                    </div>
                    {/* second container holding the form */}
                    <div>

                    </div>
                </div>
                {/* Ratings and specs container */}
                <div className="py-12">
                    <div className="flex flex-row gap-x-3 items-center justify-center">
                        <div className="w-24 h-32" style={{ backgroundImage: `url('https://a0.muscache.com/pictures/ec500a26-609d-440f-b5d0-9e5f92afd478.jpg')`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}></div>
                        <div className="flex overflow-hidden h-32 text-8xl font-semibold">{slides[id].ratings}</div>
                        <div className="w-24 h-32" style={{ backgroundImage: `url('https://a0.muscache.com/pictures/65bb2a6c-0bdf-42fc-8e1c-38cec04b2fa5.jpg ')`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}></div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-semibold text-[18px]">Guest favourite</p>
                        <div className="text-center text-gray-500 w-80 "><p>One of the most loved homes on Airbnb based on ratings, reviews and reliability</p></div>
                    </div>
                    {/* Specs box */}
                    <div className="flex flex-row border-b py-12 border-gray-300">
                        {/* overall ratings container */}
                        <div className="w-1/7 border-r border-gray-300 pr-8">
                            <p className="text-sm font-semibold">Overall rating</p>
                            <ul className="mt-2 leading-4 text-sm font-[400]">
                                <li className="flex flex-row items-center justify-center gap-2">
                                    <div>5</div>
                                    <div className="border w-32 h-1 rounded-lg bg-gray-200">
                                        <div className="h-full w-3/4 bg-black rounded-lg gap-2"></div>
                                    </div>
                                </li>
                                <li className="flex flex-row items-center justify-center gap-2">
                                    <div>4</div>
                                    <div className="border w-32 h-1 rounded-lg bg-gray-200">
                                        <div className="h-full w-2/4 bg-black rounded-lg gap-2"></div>
                                    </div>
                                </li>
                                <li className="flex flex-row items-center justify-center gap-2">
                                    <div>3</div>
                                    <div className="border w-32 h-1 rounded-lg bg-gray-200">
                                        <div className="h-full w-1/6 bg-black rounded-lg gap-2"></div>
                                    </div>
                                </li>
                                <li className="flex flex-row items-center justify-center gap-2">
                                    <div>2</div>
                                    <div className="border w-32 h-1 rounded-lg bg-gray-200"></div>
                                </li>
                                <li className="flex flex-row items-center justify-center gap-2">
                                    <div>1</div>
                                    <div className="border w-32 h-1 rounded-lg bg-gray-200"></div>
                                </li>
                            </ul>
                        </div>
                        {/* Cleanliness container */}
                        <div className="flex flex-col w-1/6 border-r border-gray-300 px-6 relative">
                            <p className="font-semibold text-sm">Cleanliness</p>
                            <p className="font-semibold text-lg">5.0</p>
                            <FaSprayCanSparkles size={35} className="bottom-0 absolute" />
                        </div>
                        {/* Accuracy box*/}
                        <div className="w-1/6 border-r border-gray-300 px-6 relative">
                            <p className="font-semibold text-sm">Accuracy</p>
                            <p className="font-semibold text-lg">5.0</p>
                            <GoVerified size={35} className="bottom-0 absolute" />
                        </div>
                        {/* checkin box */}
                        <div className="w-1/6 border-r border-gray-300 px-6 relative">
                            <p className="font-semibold text-sm" >Check-in</p>
                            <p className="font-semibold text-lg">5.0</p>
                            <IoKeyOutline size={35} className="bottom-0 absolute" />
                        </div>
                        {/* communication box */}
                        <div className="w-1/6 border-r border-gray-300 px-6 relative">
                            <p className="font-semibold text-sm">Communication</p>
                            <p className="font-semibold text-lg">5.0</p>
                            <FaRegMessage size={35} className="bottom-0 absolute" />
                        </div>
                        {/* location box */}
                        <div className="w-1/6 border-r border-gray-300 px-6 relative">
                            <p className="font-semibold text-sm">Location</p>
                            <p className="font-semibold text-lg">5.0</p>
                            <FaMapLocationDot size={35} className="bottom-0 absolute" />
                        </div>
                        {/* value */}
                        <div className="w-1/6 px-6 relative">
                            <p className="font-semibold text-sm">Value</p>
                            <p className="font-semibold text-lg">5.0</p>
                            <CiShoppingTag size={35} className="bottom-0 absolute" />
                        </div>
                    </div>
                </div>
                {/* user reviews container*/}
                <div className="flex flex-col gap-12 pb-12 border-b border-gray-300">
                    <div className="grid grid-cols-2 gap-x-3 gap-y-5 ">
                        {
                            reviews.map((item) => (
                                <div className="flex flex-col gap-3 w-3/4 ">
                                    <div className="flex flex-row gap-x-3">
                                        <div className="w-14 h-14 rounded-full border" style={{ backgroundImage: `url(${item.profile})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}></div>
                                        <div className="flex flex-col">
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-sm text-gray-400 font-[300]">{item.country}</p>
                                        </div>
                                    </div>
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
                                </div>
                            ))
                        }
                    </div>
                    <button className="border border-slate-900 rounded-md w-44 h-12">Show all {slides[id].reviews.length} reviews</button>
                </div>
                {/* map & location container */}
                <div>
                        <p>Where you'll be</p>
                        <div>
                            map will render here
                        </div>
                </div>
            </div>
        </div>
    )
}
export default RoomInfo;