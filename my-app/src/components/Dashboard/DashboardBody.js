import React from "react";
import './Dashboard.css'

function DashboardBody() {
    return (
        <div className="dashboardImageContainer">
            <img className="dashboardImage" src="./images/dashboard.png" />
            <img className="dashboardBlob" src="./images/registerBlob.png"/>
        </div>
    );
}

export default DashboardBody;