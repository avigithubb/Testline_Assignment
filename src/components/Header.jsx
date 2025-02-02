import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import Land from "./Land";
import Result from "./Result";

function Header(){
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Land />} ></Route>
            <Route path="/home" element={<Home />} ></Route>
            <Route path="/results" element={<Result />} ></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Header;
