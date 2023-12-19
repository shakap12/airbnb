import React, { useState } from "react";
import Calendar from 'react-calendar';
import '../Constants/calender.css'
import { CiKeyboard } from "react-icons/ci";
function CalenderRoomInfo() {
    const [date, setDate] = useState();
    return (
        <div className="py-10 border-b border-gray-300">
            <p className="font-semibold text-2xl">Select check-in date</p>
            <p className="text-sm font-[400] text-gray-500">Add your travel dates for exact pricing</p>
            <div className="py-5">
                <Calendar onChange={(date) => setDate(date)} value={date} selectRange showDoubleView={true} activeStartDate={new Date()} />
            </div>
            <div className="flex flex-row justify-between">
                <CiKeyboard size={28} />
                <div className="font-semibold underline">Clear dates</div>
            </div>
        </div>
    )
}
export default CalenderRoomInfo;