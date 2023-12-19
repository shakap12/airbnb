import React from "react";
import slides from "../Constants/imageIndex";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardsContainer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-36 gap-x-2 mt-2 px-2">
            {
                slides.map((item) => (
                    <Card slide={item} ></Card>
                ))
            }
        </div>
    )
}
export default CardsContainer;