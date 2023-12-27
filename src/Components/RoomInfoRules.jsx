import React from "react";

function RoomInfoRules() {
    return (
        <div>
            <ul className="flex flex-col gap-y-3 mt-2">
                <lh className="font-semibold text-lg">Cancellation Policy</lh>
                <li>This reservation is non-refundable</li>
                <p className="leading-4">Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
                <div className="flex flex-row gap-x-1">
                    <a className="underline font-semibold text-sm">Show more </a>
                    <span className="no-underline">&#8594;</span>
                </div>
            <ul className="flex flex-col gap-y-2">
                <lh className="font-semibold text-lg">House Rules</lh>
                <li>Check in after 2:00 pm</li>
                <li>Check-out before 10:00 am</li>
                <li>2 guests maximum</li>
            </ul>
            <ul className="flex flex-col gap-y-2">
                <lh className="font-semibold text-lg">Safety & property</lh>
                <li>Carbon monoxide alarm not reported</li>
                <li>Smoke alarm not reported</li>
                <div className="flex flex-row gap-x-1 text-sm">
                    <a className="underline font-semibold">Show more </a>
                    <span className="no-underline">&#8594;</span>
                </div>
            </ul>
            </ul>
        </div>
    )
}
export default RoomInfoRules;