import React from "react";

function Headers() {
    return (
        <div className="px-6 pt-2 border-b shadow-sm">
            <header className="p-4 flex justify-between">
                <a href="" className="flex items-center gap-1 hidden sm:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90 text-[#F5385D]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span className="font-bold text-xl text-[#F5385D]">airbnb</span>
                </a>
                <div className="flex justify-around gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md w-full sm:w-80">
                    <div className="font-semibold text-sm flex items-center">Anywhere</div>
                    <div className="border-l border-gray-300"></div>
                    <div className="font-semibold text-sm flex items-center">Any week</div>
                    <div className="border-l border-gray-300"></div>
                    <div className="text-sm flex items-center text-gray-500">Add guests</div>
                    <button className="p-2 bg-[#F5385D] rounded-full text-white ml-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                <div className="flex gap-2 border border-gray-300 rounded-full items-center px-2 hidden sm:flex">
                    <div>
                        <button className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <button className=" bg-gray-500 rounded-full h-6 w-6 pl-1 text-white" data-dropdown-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )

}
export default Headers;