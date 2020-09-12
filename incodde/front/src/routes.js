import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login.pages";
import Register from "./pages/register.pages";
import Menu from "./pages/mainmenu.pages";
import Forgot from "./pages/forgot.pages";

export default function mainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/forgot" element={<Forgot/>} />
        </Routes>
    )
}
