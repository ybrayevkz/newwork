import React, {useState} from "react";
import {NavbarAuthenticated} from "../components/Navbars/NavbarAuthenticated";
import {SidebarAuthenticated} from "../components/Sidebars/SidebarAuthenticated";
import {Footer} from "../components/Footer";


export const ProfilePage = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <SidebarAuthenticated isOpen={isOpen} toggle={toggle} />
            <NavbarAuthenticated toggle={toggle} />

            <Footer />
        </>
    )
}