import React from "react";
import Footer from "../components/Footer/Footer";
import ProfileNav from "../components/ProfileView/ProfileNav";
import ProfileBody from "../components/ProfileView/Profile";




function AppPage() {
    return (
        <>
        <ProfileNav />
        <ProfileBody />
        <Footer />
        </>
    );
}

export default AppPage;