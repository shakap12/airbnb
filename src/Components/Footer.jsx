import React, { useState } from "react";
import getawayCategories from "../Constants/FooterGetawaysCategories";
import { categoriesByIndex, footerOptions } from "../Constants/FooterGetawaysCategories";
import { PiCopyrightLight } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsCurrencyRupee } from "react-icons/bs";

function Footer() {
    const [categories, setCategories] = useState(categoriesByIndex[0])
    
    return (
        <div className="bg-gray-100 mt-[120px] pb-[20px]">
            <div className="pb-10 pt-[50px] px-6 border-b border-gray-300">
                <div className="border-b border-gray-300">
                    <p className="font-semibold text-2xl">Inspiration for future gateways</p>
                    <div className="flex flex-row shrink-0 mt-3 mb-3 font-semibold text-gray-500 gap-6 overflow-y-scroll no-scrollbar ">
                        {
                            getawayCategories.map((item, itemIdx) => (
                                <button className="hello" onClick={() => setCategories(categoriesByIndex[ itemIdx== 0 ? 1 : 0])}>{item}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {
                        categories.map((item) => (
                            <div className="mt-5">
                                <p className="font-semibold text-sm">{item.title}</p>
                                <p className="text-gray-400 font-normal text-sm">{item.desp} rentals</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-10 px-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-gray-300 pb-12 gap-4">
                    {
                        footerOptions.map((item) => (
                            <div>
                                <h3 className="font-semibold text-sm">{item.title}</h3>
                                <ul>
                                    {
                                        item.options.map((opt) => (
                                            <li className="mt-2 text-sm font-normal text-slate-900">{opt}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-row px-6 text-[15px] mt-4 items-center justify-between">
                <div className="hidden lg:flex flex-row font-[300]">
                    <span className="mt-[5px]"><PiCopyrightLight /></span>
                    <span>2023 Airbnb, Inc.</span>
                    <span className="text-2xl"><LuDot /></span>
                    <span className="-ml-2">Privacy</span>
                    <span className="text-2xl"><LuDot /></span>
                    <span className="-ml-2">Terms</span>
                </div>
                <div>Built by <span className="font-semibold">Shashwat Kapoor</span> using <span className="font-semibold">React, Redux & Tailwind CSS</span></div>
                <div className="hidden lg:flex flex-row">
                    <CiGlobe className="mt-[2px] text-lg" />
                    <p className="text-md font-semibold hover:underline cursor-pointer ml-1">English (IN)</p>
                    <BsCurrencyRupee className="mt-1 text-lg ml-2" />
                    <p className="text-md font-semibold hover:underline cursor-pointer">INR</p>
                    <div className="flex flex-row gap-2 ml-4">
                        <IoLogoFacebook className="mt-1 text-lg" />
                        <FaXTwitter className="mt-1 text-lg" />
                        <FaSquareInstagram className="mt-1 text-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;