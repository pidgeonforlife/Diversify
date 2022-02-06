import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Navbar/Navbar";
import DashboardBody from "../components/Dashboard/DashboardBody";

function DashboardPage() {
    return (
        <>
        <Navbar />
        <Dashboard />
        <DashboardBody />
        </>
    );
}

export default DashboardPage;