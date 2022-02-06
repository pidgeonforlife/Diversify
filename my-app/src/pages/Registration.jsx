import React from "react";
import Register from "../components/Registration/Register";
import Navbar from "../components/Navbar/Navbar";
import RegisterBody from "../components/Registration/RegisterPage";

function RegisterPage() {
    return (
        <>
        <Navbar />
        <RegisterBody />
        <Register />
        </>
    );
}

export default RegisterPage;