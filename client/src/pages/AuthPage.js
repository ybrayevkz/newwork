import React, {useEffect} from "react";
import {useState} from "react";
import {AuthSection} from "../components/AuthSection";
import {Footer} from "../components/Footer";
import {Sidebar} from "../components/Sidebars/Sidebar"
import {Navbar} from "../components/Navbars/Navbar";

export const AuthPage = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <>
            <AuthSection />
            <Footer />
        </>
    )
}
