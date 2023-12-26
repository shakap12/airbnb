import { createAction } from "@reduxjs/toolkit";

function getDate(days) {
    const today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    if (days + days <= 31) date += days
    else if (date + days >= 31) {
        month = month + 1;
        date = days - (31 - date)
    }
    return `${date}/${month}/${year}`;
}
//actions
export const checkinDate = createAction("CHKIN")
export const checkoutDate = createAction("CHKOUT")
export const setSelectedDate = createAction("SETRANGE")
let initialState = {
    inichkindate: getDate(0),
    inichkoutdate: getDate(7),
    dateRange: null,
};
function getFDate(date) {
    const mntharr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    date = String(date)
    let dt = date.substring(8, 10)
    let mnth = date.substring(4, 7)
    mnth=mntharr.indexOf(mnth)+1
    if(mnth<10)mnth='0'+mnth
    let yr = date.substring(11, 15)
    let fdt = `${dt}-${mnth}-${yr}`
    return fdt
}
//reducer without toolkit
function Reducer(state = initialState, action) {

    switch (action.type) {
        case "CHKIN":
            const indate = action.payload[0];
            return initialState = {
                ...state, inichkindate: getFDate(indate)
            }
        case "CHKOUT":
            const outdate = action.payload[1];
            return initialState = {
                ...state, inichkoutdate:getFDate(outdate)
            }
        case "SETRANGE":
            console.log("action", action)
            return initialState = {
                dateRange: action.payload
            }
        default: return state;
    }
}
export default Reducer;
