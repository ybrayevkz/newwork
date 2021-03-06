import React, {useState} from "react";
import {Navbar} from "../components/Navbars/Navbar";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {CertificationSection} from "../components/CetificationSection";
import {Footer} from "../components/Footer";

export const CertificationPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(

        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <CertificationSection />
            <Footer />
        </>
    )
}