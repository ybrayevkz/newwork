import React, {useState} from "react";
import {NavbarAuthenticated} from "../components/Navbars/NavbarAuthenticated";
import {SidebarAuthenticated} from "../components/Sidebars/SidebarAuthenticated";
import {Footer} from "../components/Footer";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {AuthorSection} from "../components/AuthorSection";


export const ProfilePage = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProfilePage />
            <Footer />
        </>
    )
}