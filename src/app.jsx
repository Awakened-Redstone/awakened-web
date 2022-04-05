import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";


// Import the Home page component
import Home from "./pages/home.jsx";
import Mods from "./pages/mods.jsx";
import Error404 from "./pages/404.jsx";

import Seo from "./components/seo.jsx";

//Import and apply external JS
import "../plugins/OverlayScrollbars.js"


// Import and apply CSS stylesheet
import "./styles/styles.css";
import "./javascript/main.js";
import "../plugins/OverlayScrollbars.css"


export default function App() {
  return (
    <>
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mods" element={<Mods />} />
        
        {/*Removes "index.html" since it doesn't exist for react redirect*/}
        {/*This route has to always be the last one!*/}
        <Route path="*" element={<Navigate to={useLocation().pathname.replace("index.html", "")} repalce/>} />
      </Routes>
    </>
  );
}
