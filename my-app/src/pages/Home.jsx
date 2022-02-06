import React from "react";
import HomePage from "../components/HomePage/Home";
import Navbar from "../components/Navbar/Navbar";
import ControlledCarousel from "../components/HomePage/Carousel";
import QuoteContainer from "../components/HomePage/QuoteContainer";
// import HomeBlob from "../components/HomePage/HomeBlob";


function Home() {
    return (
        <>
        <Navbar />
        <ControlledCarousel />
        <HomePage />
        </>
    );
}

export default Home;