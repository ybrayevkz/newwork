import React from "react";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {Footer} from "../components/Footer";
import {PolicySection} from "../components/PolicySection";

export const PolicyPage = (props) => {
    return(
        <>
            <Sidebar />
            <Navbar />
            <PolicySection />
            <Footer />
        </>
    )
}