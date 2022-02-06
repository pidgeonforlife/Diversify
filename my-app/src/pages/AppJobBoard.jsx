import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import JobBoard from "../components/JobBoard/JobBoard";
import AvailableJob from "../components/JobBoard/AvailableJobs";

function AppJobBoard() {
    return (
        <>
        <Navbar />
        <JobBoard />
        <AvailableJob />
        <Footer />
        </>
    );
}

export default AppJobBoard;