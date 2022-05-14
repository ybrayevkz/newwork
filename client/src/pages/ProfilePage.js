import React, {useState} from "react";
import {Footer} from "../components/Footer";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {ProfileSection} from "../components/ProfileSection";




export const ProfilePage = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ProfileSection />
            <Footer />
        </>
    )
}