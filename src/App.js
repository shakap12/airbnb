import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Index from "./Components/Index";
import Home from "./Components/Home";
import RoomInfo from "./Components/RoomInfo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index></Index>} />
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/room/:id" element={<RoomInfo></RoomInfo>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
