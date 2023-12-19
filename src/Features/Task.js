import { createAction } from "@reduxjs/toolkit";

//actions
export const increment=createAction("INCR")
export const decrement=createAction("DCR")

let initialState={
    counter:0
};

//reducer without toolkit
function Reducer(state=initialState,action){
    
    switch(action.type){
        case "INCR":
            return initialState={
                counter:initialState.counter+1
            }
        case "DCR":
            return initialState={
                counter:initialState.counter-1
            }
        default: return state;
    }
}
export default Reducer;
