import React from "react";
import NavbarComponent from "./components/NavbarComponent"
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import FooterComponent from "./components/FooterComponent"
function App() {
  return (
    <>
    <NavbarComponent />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <FooterComponent />
    </>
  );
}

export default App;
