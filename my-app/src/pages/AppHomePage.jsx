import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AppHome from "../components/AppHome/AppHome";
import AppHome2 from "../components/AppHome/AppHome2";
import Footer from "../components/Footer/Footer";






function AppHomePage() {
    return (
        <>
        <Navbar />
        <AppHome />
        <AppHome2 />
        <Footer />
        </>
    );
}

export default AppHomePage;