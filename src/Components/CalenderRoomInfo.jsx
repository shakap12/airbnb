import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import '../Constants/calender.css'
import { CiKeyboard } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "../Features/Task";
function CalenderRoomInfo() {
    const dispatch = useDispatch()
    let sizecheck = false
    if (window.innerWidth >= 640) sizecheck = true;
    return (
        <div className="py-10">
            <p className="font-semibold text-2xl">Select check-in date</p>
            <p className="text-sm font-[400] text-gray-500">Add your travel dates for exact pricing</p>
            <div className="py-5">
                <Calendar onChange={(date) => dispatch(setSelectedDate(date))} selectRange showDoubleView={sizecheck} />
            </div>
            <div className="flex flex-row justify-between">
                <CiKeyboard size={28} />
                <div className="font-semibold underline">Clear dates</div>
            </div>
        </div>
    )
}
export default CalenderRoomInfo;