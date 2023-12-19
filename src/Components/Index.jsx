import React from "react";
import Headers from "./Headers";
import Login from "./Login";

function Index() {
    return (
        <div className="flex flex-col min-h-screen">
            <Headers></Headers>
            <Login></Login>
        </div>
    )
}
export default Index;