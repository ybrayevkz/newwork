import React, {useState} from "react";
import {NavbarAuthenticated} from "../components/Navbars/NavbarAuthenticated";
import {SidebarAuthenticated} from "../components/Sidebars/SidebarAuthenticated";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {Footer} from "../components/Footer";
import {AboutWebSection} from "../components/AboutWebSection";
import {homeObjOne} from "../components/AboutWebSection/Data";
import {homeObjTwo} from "../components/AboutWebSection/Data";
import {Services} from "../components/AboutWebSection/Services";

export const AboutWebPage = (props, isAuthenticated) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    if (!isAuthenticated){
        return(
            <>
                <SidebarAuthenticated isOpen={isOpen} toggle={toggle}/>
                <NavbarAuthenticated toggle={toggle}/>
                <AboutWebSection {...homeObjOne}/>
                <Footer />
            </>
        )
    }
    else{
        return (
            <>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle}/>
                <AboutWebSection {...homeObjOne}/>
                <Services />
                <AboutWebSection {...homeObjTwo}/>
                <Footer />
            </>
        )
    }

}