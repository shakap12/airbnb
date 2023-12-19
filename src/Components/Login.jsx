import React from "react";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="grow flex items-center justify-center ">
            <div className="border border-gray-400 rounded-xl flex flex-col gap-4 w-2/4 sm:mt-10">
                <div className="flex items-center justify-around border-b border-gray-200 h-16 font-bold">Log in or Sign up</div>
                <div className="p-8">
                    <h3 className="font-semibold text-2xl">Welcome to Airbnb</h3>
                    <form className="flex flex-col w-full gap-y-4 mt-4">
                        <input type="email" placeholder="john@email.com" className="border border-gray-400 rounded-md h-12 p-2"></input>
                        <input type="password" placeholder="password" className="border border-gray-400 rounded-md h-12 p-2"></input>
                        <Link to="/home" type="submit" className="h-12 bg-[#F5385D] text-white rounded-md mt-2 flex items-center justify-center">Login</Link>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Login;