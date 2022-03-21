import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {Footer} from "../components/Footer";
import React, {useState} from "react";
import {NotFoundSection} from "../components/NotFoundSection";
import {not_found} from "../components/NotFoundSection/Data";

export const NotFoundPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <NotFoundSection {...not_found}/>
            <Footer />
        </>
    )
}