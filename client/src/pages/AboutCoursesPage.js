import React, {useState} from "react";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {Footer} from "../components/Footer";
import {AboutCoursesSection} from "../components/AboutCoursesSection";


export const AboutCoursesPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <AboutCoursesSection />
            <Footer />
        </>
    )
}